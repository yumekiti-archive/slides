import sys
import os

# error handling
if len(sys.argv) != 2:
  print("Usage: python main.py <markdown_file>")
  sys.exit(1)

# command line arguments
markdown_dir = sys.argv[1]

# open file
markdown_file = open(markdown_dir, 'r')

# read file
markdown_text = markdown_file.read()

# create readme.md path
markdown_filename = markdown_dir.split("/")[-1]
reaadme_dir = markdown_dir.replace(markdown_filename, "readme.md")

# create readme.md file
if not os.path.exists(reaadme_dir):
  os.mknod(reaadme_dir)

# ----- edit file -----

# remove marp: true and theme: yumekiti and paginate: true and size: 16:9
markdown_text = markdown_text.replace("marp: true", "")
markdown_text = markdown_text.replace("theme: yumekiti", "")
markdown_text = markdown_text.replace("paginate: true", "")
markdown_text = markdown_text.replace("size: 16:9", "")

# remove ---
markdown_text = markdown_text.replace("---", "")

# remove <!-- and -->
markdown_text = markdown_text.replace("<!--", "")
markdown_text = markdown_text.replace("-->", "")

# remove _class: headline and _class: general
markdown_text = markdown_text.replace("_class: headline", "")
markdown_text = markdown_text.replace("_class: general", "")
markdown_text = markdown_text.replace("_header: ", "")

# remove ###
markdown_text = markdown_text.replace("###", "")

for line in markdown_text.splitlines():
  # 改行が2つ以上あるときは1つにする
  if line == "":
    markdown_text = markdown_text.replace("\n\n\n", "\n")
  # "で囲まれている行を削除
  if line.startswith('"') and line.endswith('"'):
    markdown_text = markdown_text.replace(line, "")

# ----------------

# write to readme.md
readme_file = open(reaadme_dir, 'w')
readme_file.write(markdown_text)

# close file
markdown_file.close()
