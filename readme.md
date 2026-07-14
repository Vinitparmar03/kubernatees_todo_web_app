# 🚀 Kubernetes Todo Web Application

A complete **Full-Stack Todo Web Application** deployed on **Kubernetes** using Docker containers. This project demonstrates how to deploy, manage, and scale a multi-tier application using Kubernetes resources such as **Deployments, Services, ConfigMaps, Persistent Volumes, Persistent Volume Claims, Ingress, and Health Probes**.

This project was built as part of my DevOps and Kubernetes learning journey to gain hands-on experience with container orchestration and cloud-native application deployment.

---

## 📖 Project Overview

The application consists of three main components:

* **Frontend** – React.js
* **Backend** – Node.js + Express.js REST API
* **Database** – MongoDB

All components are containerized using Docker and deployed on Kubernetes.

---

# 🏗️ Architecture

```text
                      User
                        │
                        ▼
               +----------------+
               |    Ingress      |
               |   (todo.local)  |
               +----------------+
                  │           │
                  │           │
                  ▼           ▼
        +----------------+  +----------------+
        | Frontend SVC   |  | Backend SVC    |
        +----------------+  +----------------+
                │                   │
                ▼                   ▼
       +----------------+   +----------------+
       | Frontend Pods  |   | Backend Pods   |
       +----------------+   +----------------+
                                     │
                                     ▼
                             +----------------+
                             | MongoDB SVC    |
                             +----------------+
                                     │
                                     ▼
                             +----------------+
                             | MongoDB Pod    |
                             +----------------+
                                     │
                                     ▼
                             +----------------+
                             | PVC            |
                             +----------------+
                                     │
                                     ▼
                             +----------------+
                             | PV (hostPath)  |
                             +----------------+
```

---

# 📂 Kubernetes Resources Used

* ✅ ConfigMap
* ✅ Deployment
* ✅ Service
* ✅ PersistentVolume (PV)
* ✅ PersistentVolumeClaim (PVC)
* ✅ Ingress
* ✅ Liveness Probe
* ✅ Readiness Probe

---

# 📁 Kubernetes Directory

```text
k8s/
│
├── backend-configmap.yaml
├── backend-deployment.yaml
├── backend-service.yaml
│
├── frontend-deployment.yaml
├── frontend-service.yaml
│
├── mongodb-deployment.yaml
├── mongodb-service.yaml
├── mongodb-pv.yaml
├── mongodb-pvc.yaml
│
└── ingress.yaml
```

---

# 🛠️ Tech Stack

| Technology    | Purpose                 |
| ------------- | ----------------------- |
| React.js      | Frontend                |
| Node.js       | Backend                 |
| Express.js    | REST API                |
| MongoDB       | Database                |
| Docker        | Containerization        |
| Kubernetes    | Container Orchestration |
| NGINX Ingress | Routing                 |

---

# 🐳 Docker Images

### Frontend

```text
vinitparmar03/todo_frontend:latest
```

### Backend

```text
vinitparmar03/todo_backend:latest
```

### Database

```text
mongo:7
```

---

# ✨ Features

* Full Stack Todo Application
* React Frontend
* Express REST API
* MongoDB Database
* Persistent Storage using PV & PVC
* Kubernetes Deployments
* Internal Service Communication
* ConfigMap for Environment Variables
* Ingress Routing
* Liveness & Readiness Probes
* Multiple Frontend Replicas
* Multiple Backend Replicas
* Easily Scalable Architecture

---

# ⚙️ Environment Variables

The backend configuration is managed using a ConfigMap.

| Variable  | Value                        |
| --------- | ---------------------------- |
| PORT      | 5000                         |
| MONGO_URL | mongodb://todo-mongodb:27018 |

---

# 🚀 Deployment

Clone the repository:

```bash
git clone https://github.com/Vinitparmar03/YOUR_REPOSITORY_NAME.git
```

Move into the project:

```bash
cd kubernatees_todo_web_app
cd k8s
```

Deploy all Kubernetes resources:

```bash
kubectl apply -f ./frontend
kubectl apply -f ./backend
kubectl apply -f ./mongodb
kubectl apply -f ./ingress
```

---

# 🔍 Verify Deployment

Check Pods

```bash
kubectl get pods
```

Check Deployments

```bash
kubectl get deployments
```

Check Services

```bash
kubectl get svc
```

Check Ingress

```bash
kubectl get ingress
```

Check Persistent Volume

```bash
kubectl get pv
```

Check Persistent Volume Claim

```bash
kubectl get pvc
```

---

# ❤️ Health Checks

## Liveness Probe

```text
GET /api/v1/health/live
```

Automatically restarts unhealthy backend containers.

---

## Readiness Probe

```text
GET /api/v1/health/ready
```

Ensures traffic is only sent to healthy backend pods.

---

# 📈 Scaling

Scale the backend:

```bash
kubectl scale deployment todo-backend --replicas=5
```

Scale the frontend:

```bash
kubectl scale deployment todo-frontend --replicas=5
```

---

# 💾 Persistent Storage

MongoDB uses:

* PersistentVolume
* PersistentVolumeClaim
* hostPath Storage

This ensures that database data remains available even after the MongoDB pod is restarted or recreated.

---

# 🌐 Ingress

The application uses an Ingress resource to route incoming requests.

| Path | Destination |
| ---- | ----------- |
| /    | Frontend    |
| /api | Backend     |

Host:

```text
todo.local
```
---


# 📊 Monitoring & Observability

This project integrates **Prometheus** and **Grafana** to monitor both the Kubernetes cluster and the Node.js application in real time.

The monitoring stack provides visibility into application performance, infrastructure resources, and Kubernetes workloads through interactive Grafana dashboards.

---

# 🏗️ Monitoring Architecture

```text
                           +----------------------+
                           |      Grafana         |
                           |   Dashboards & UI    |
                           +----------▲-----------+
                                      │
                               PromQL Queries
                                      │
                           +----------┴-----------+
                           |     Prometheus       |
                           |  Time-Series DB      |
                           +----------▲-----------+
                                      │
                        Scrapes Metrics Every 15s
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         │                            │                            │
         ▼                            ▼                            ▼
+-------------------+      +-------------------+      +-------------------------+
|   Node Exporter   |      | Kube State Metrics|      | Node.js Application     |
| Infrastructure    |      | Kubernetes Metrics|      | (/metrics endpoint)     |
+-------------------+      +-------------------+      +-------------------------+
```

---

# 📦 Monitoring Components

| Component | Purpose |
|----------|---------|
| Prometheus | Collects and stores metrics |
| Grafana | Visualizes metrics through dashboards |
| Prometheus Operator | Manages Prometheus resources |
| Node Exporter | Collects infrastructure metrics |
| Kube State Metrics | Exposes Kubernetes object metrics |
| ServiceMonitor | Automatically configures Prometheus to scrape application metrics |
| prom-client | Exposes custom metrics from the Node.js application |

---

# 📂 Monitoring Directory

```text
monitoring/
│
├── values.yaml
└── servicemonitor.yaml
```

---

# 🚀 Install Helm

Helm is required to install the Prometheus Operator and Grafana.

### Ubuntu

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

Verify installation

```bash
helm version
```

---

# 📥 Add Prometheus Helm Repository

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

Update Helm repositories

```bash
helm repo update
```

---

# 📁 Create Monitoring Namespace

```bash
kubectl create namespace monitoring
```

Verify

```bash
kubectl get ns
```

---


# 📦 Install kube-prometheus-stack

```bash
helm install monitoring prometheus-community/kube-prometheus-stack \
  -n monitoring \
  -f k8s/ingress/custom_kube_prometheus_stack.yml
```

---

# 🔍 Verify Installation

Check Helm Release

```bash
helm list -n monitoring
```

Check Pods

```bash
kubectl get pods -n monitoring
```

Check Services

```bash
kubectl get svc -n monitoring
```

Check Ingress

```bash
kubectl get ingress -n monitoring
```

---


```bash
kubectl apply -f k8s/monitoring/todo-backend-servicemonitor.yaml
```

Verify

```bash
kubectl get servicemonitor -n monitoring
```

Describe

```bash
kubectl describe servicemonitor todo-backend-monitor -n monitoring
```

---

# 📊 Application Metrics

The backend exposes Prometheus metrics through

```text
GET /metrics
```

The following custom metrics are available:

| Metric | Description |
|---------|-------------|
| http_requests_total | Total HTTP requests received |
| http_request_duration_seconds | Measures request latency using a Histogram |

Prometheus automatically scrapes these metrics every **15 seconds** using the ServiceMonitor.

---

# 📈 Infrastructure Metrics

Collected using **Node Exporter**

- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- Filesystem Usage

---

# ☸ Kubernetes Metrics

Collected using **Kube State Metrics**

- Pods
- Deployments
- ReplicaSets
- Namespaces
- Nodes
- Running Containers

---

# 📉 Sample PromQL Queries

## Total Requests

```promql
http_requests_total
```

---

## Request Rate

```promql
rate(http_requests_total[5m])
```

---

## Average Request Duration

```promql
rate(http_request_duration_seconds_sum[5m])
/
rate(http_request_duration_seconds_count[5m])
```

---

## CPU Usage

```promql
100 - (avg(rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)
```


---

## Running Pods

```promql
kube_pod_status_phase{phase="Running"}
```

---

# 🌐 Access Prometheus

```
http://prometheus.local
```

Navigate to

```
Status → Targets
```

Verify that

```
todo-backend
```

shows

```
UP
```

---

# 📊 Access Grafana

```
http://grafana.local
```

Default Credentials

```text
Username : admin
Password : admin
```

---

# 📈 Grafana Dashboards

This project visualizes the following metrics using Grafana dashboards:

- HTTP Request Count
- HTTP Request Duration
- CPU Usage
- Memory Usage
- Disk Usage
- Network Usage
- Kubernetes Pod Metrics
- Deployment Metrics
- Infrastructure Monitoring

---


# 🎥 Project video

About this project on LinkedIn:

🔗 **Demo Video**

https://www.linkedin.com/posts/vinit-kumar-parmar-22522a215_kubernetes-docker-devops-ugcPost-7479573743510413312-zK3N/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZRDr0B3jGUgimvN4mtmvOEEJqmA9dQEvQ


---

# 📚 What I Learned

Through this project, I gained hands-on experience with deploying, managing, and monitoring cloud-native applications on Kubernetes. Key concepts I learned include:

* Docker containerization and image management
* Deploying multi-tier applications on Kubernetes
* Managing Kubernetes Deployments and Services
* Configuring applications using ConfigMaps
* Implementing Persistent Volumes (PV) and Persistent Volume Claims (PVC) for data persistence
* Configuring Ingress for external access and request routing
* Implementing Liveness and Readiness Probes for application health monitoring
* Scaling applications by increasing pod replicas
* Managing stateful applications with persistent storage
* Understanding Kubernetes networking and service discovery
* Deploying a production-style monitoring stack using Prometheus and Grafana
* Installing and managing **kube-prometheus-stack** using Helm
* Collecting infrastructure metrics with **Node Exporter**
* Monitoring Kubernetes resources using **Kube State Metrics**
* Exposing custom application metrics using the **prom-client** library
* Configuring **ServiceMonitor** to enable automatic metric scraping by Prometheus
* Monitoring HTTP request count and request latency using Prometheus Counters and Histograms
* Writing PromQL queries to analyze application and infrastructure metrics
* Building Grafana dashboards for real-time visualization of Kubernetes and application metrics
* Understanding the importance of observability in maintaining reliable and scalable cloud-native applications
* Applying production-ready deployment and monitoring best practices

---

# 👨‍💻 Author

## Vinit Parmar

**GitHub**

https://github.com/Vinitparmar03

**LinkedIn**

https://www.linkedin.com/in/vinit-kumar-parmar-22522a215/

**Email**

vinitparmar03@gmail.com

---

# 🤝 Connect With Me

If you have any questions, suggestions, or feedback, feel free to connect with me.

I'm always interested in discussing:

* Kubernetes
* Docker
* DevOps
* Cloud Computing
* Backend Development
* Full Stack Development

---

# ⭐ Support

If you found this project helpful, please consider giving it a **Star ⭐** on GitHub.

Your support motivates me to continue building and sharing more DevOps and Kubernetes projects.

Thank you for visiting this repository! ❤️
