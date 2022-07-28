# slides

## Required packages

```
sudo apt update && \
sudo apt install -y libglib2.0-0 libasound2
```

## How to use

create slide

```
SLIDE=piyo

# copy template
cp -r template ./slides/$SLIDE

# replace hoge
sed -i -e s/hoge/$SLIDE/g ./slides/$SLIDE/.fusumarc.js
```

## Deploy to github pages

Change slide in **packege.json** to the path of the slide to be executed

```json
"config": {
  "slide": "slides/piyo"
},
```
