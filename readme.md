# スライド一覧

| スライド名 | 作成日 |
|:--|:--|
| [kubevirt](./kubevirt/) | 2022-07-28 |

## readme.md
```sh
$ python main.py <markdown_file>
```

## index.html
```sh
$ docker run --rm -v $PWD:/home/marp/app/ -e LANG=$LANG -e MARP_USER="$(id -u):$(id -g)" marpteam/marp-cli slides.md -o index.html
```
