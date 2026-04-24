# Harness CD Setup Guide for Weatheria

## Problem Fixed
The original error `InvalidImageName` occurred because Harness expressions like `<+artifacts.primary.image>` cannot be used directly in Kubernetes manifests. They must be in templated files (Helm/Kustomize) that Harness processes.

## Solution: Helm Chart Setup

### What We Created
```
helm/
├── Chart.yaml              # Helm chart metadata
├── values.yaml             # Config values (with Harness expression)
└── templates/
    ├── deployment.yaml     # Templated K8s deployment
    └── service.yaml        # Templated K8s service
```

### Key Change
**Before (broken):**
```yaml
# k8s/deployment.yaml
image: <+artifacts.primary.image>  # ❌ Harness won't process this
```

**After (working):**
```yaml
# helm/values.yaml
image:
  repository: <+artifacts.primary.image>  # ✅ Harness processes this

# helm/templates/deployment.yaml
image: {{ .Values.image.repository }}  # Go template syntax
```

---

## Harness Configuration Steps

### 1. Update Service Definition
In Harness UI, go to **Services** → Your Weatheria Service → **Edit**

**Under "Kubernetes":**
- **Manifest Type**: Change to **Helm Chart**
- **Source**: 
  - Repository: Your GitHub repo
  - Path: `helm/` (where Chart.yaml is)
- **Chart Name**: `weatheria`

### 2. Configure Docker Artifact
**Under "Artifacts":**
- Click **Add Artifact**
- **Artifact Type**: Docker Registry
- **Docker Registry Connector**: (select your registry: Docker Hub, ECR, GCR, etc.)
- **Repository**: `your-registry/weatheria` (or whatever your image is called)
- **Tag**: Latest or specific version
- **Primary Artifact**: Mark as primary

Example for Docker Hub:
```
Repository: yourusername/weatheria
Tag: latest
```

Example for ECR:
```
Repository: 123456789.dkr.ecr.us-east-1.amazonaws.com/weatheria
Tag: latest
```

### 3. Save & Deploy
Once configured, Harness will:
1. Pull the Docker image from your registry
2. Resolve `<+artifacts.primary.image>` to the full image path
3. Helm template all files
4. Deploy to Kubernetes with the correct image

---

## How It Works Now

When you trigger a deployment:

```
Harness Pipeline
    ↓
1. Fetch artifact from registry → resolves to full image path
   e.g., "index.docker.io/yourusername/weatheria:latest"
    ↓
2. Helm templates values → replaces {{ .Values.image.repository }}
    ↓
3. Final K8s manifest:
   image: index.docker.io/yourusername/weatheria:latest
    ↓
4. Kubectl applies manifest → kubelet pulls image ✅
```

---

## Verification Checklist

- [ ] Helm chart exists at `helm/Chart.yaml`
- [ ] `helm/values.yaml` contains `<+artifacts.primary.image>`
- [ ] `helm/templates/deployment.yaml` uses `{{ .Values.image.repository }}`
- [ ] Harness Service is set to **Helm Chart** type
- [ ] Docker artifact is configured with correct registry
- [ ] Artifact is marked as **Primary**

---

## Testing Locally (Optional)

To see what Helm will generate before deploying:

```bash
# With helm CLI installed
helm template weatheria helm/

# Should output templated YAML with placeholder still there
# (actual image substitution happens in Harness)
```

---

## Troubleshooting

**Still getting `InvalidImageName` error?**
- Check Service > Manifests > Manifest Type is **Helm Chart** (not Kubernetes Manifests)
- Verify artifact registry connector is correct
- Check artifact is marked as **Primary**

**Image path looks wrong?**
- Make sure Docker registry connector points to the right registry
- Verify repository name matches your actual image

**Helm template syntax errors?**
- Ensure all `{{ .Values.xxx }}` references match keys in `values.yaml`

---

## Next Steps

1. Commit these Helm files to git
2. Update Harness Service configuration (follow steps above)
3. Trigger a new deployment
4. Monitor Pod events in Kubernetes (should no longer see InvalidImageName)

Old K8s manifests in `k8s/` can be kept for reference or deleted.
