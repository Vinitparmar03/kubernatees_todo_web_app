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

# 🎥 Project video

About this project on LinkedIn:

🔗 **Demo Video**

https://www.linkedin.com/posts/vinit-kumar-parmar-22522a215_kubernetes-docker-devops-ugcPost-7479573743510413312-zK3N/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZRDr0B3jGUgimvN4mtmvOEEJqmA9dQEvQ


---

# 📚 What I Learned

Through this project, I learned:

* Docker Containerization
* Kubernetes Deployments
* Kubernetes Services
* ConfigMaps
* Persistent Volumes
* Persistent Volume Claims
* Ingress
* Health Probes
* Scaling Applications
* Stateful Applications
* Kubernetes Networking
* Production-ready Deployment Concepts

---

# 🚀 Future Improvements

* Kubernetes Secrets
* Helm Charts
* Horizontal Pod Autoscaler (HPA)
* Prometheus Monitoring
* Grafana Dashboards
* GitHub Actions CI/CD
* ArgoCD GitOps
* Deployment on AWS EKS / Google GKE / Azure AKS

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
