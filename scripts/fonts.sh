# this is a personal script i use to retrieve my fonts

git clone https://github.com/markjoshwel/fonts-private.git
mkdir -p public/.fonts/
mv fonts-private/*.woff2 public/.fonts/
rm -rf fonts-private
