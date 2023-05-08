# スライド一覧

| スライド名 | 作成日 |
|:--|:--|
| [conserver](./infrastructure/conserver/) | 2023-01-29 |
| [kubevirt](./infrastructure/kubevirt/) | 2022-07-28 |
| [prometheus](./infrastructure/prometheus/) | 2022-00-00 |
| [self_introduction](./etc/self_introduction/) | 2022-00-00 |

## readme.md
```sh
$ python main.py slide.md
```

## index.html
```sh
$ DIR=./kubevirt/
$ docker run --rm -v $PWD:/home/marp/app/ -e LANG=$LANG -e MARP_USER="$(id -u):$(id -g)" marpteam/marp-cli $DIR/slide.md --theme ./style.css -o $DIR/index.html
```
