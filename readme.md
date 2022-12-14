# スライド一覧

| スライド名 | 作成日 |
|:--|:--|
| [kubevirt](./kubevirt/) | 2022-07-28 |

# readme.md 生成方法

```sh
# generatorがない場合は、以下のコマンドでインストールする。
$ pyinstaller main.py --onefile --name generator

# generatorを実行する。
$ ./generator <markdown_file>

# またはpythonで実行する。
$ python main.py <markdown_file>
```