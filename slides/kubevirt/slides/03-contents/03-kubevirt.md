## KubeVirtとは

---

KubernetesでIaaSを実現するには、
VMを操作するための追加の仕組みが必要になります。
Kubernetesのコントロールプレーン（制御の仕組み）を活用し、
VMを作成・管理する仕組みを提供するのがKubeVirtです。

---

## 従来仮想基盤との違い

---

![](../../images/comparison.png)

---

## <span style={{color: 'orange'}}>VMとコンテナの連携が容易</span>

Kubernetes上のコンテナとVMの連携が容易であることも挙げられます。
通常のVMだと当然ながらKubernetesの外にいます。
従って、コンテナと通信するにはコンテナを外部に公開する設定が必要でした。
更にはKubernetes内で定義した名前をVMで扱うことができませんでした。Kubernetes内にVMを構築できることで、これらの考慮が不要になり、
コンテナとの連携が比較的容易になります。

---

## KubeVirt のアーキテクチャ

---

![](../../images/architecture-1.png)

---

## Pod（per VMI）をコンテナと比較

---

![](../../images/architecture-2.png)