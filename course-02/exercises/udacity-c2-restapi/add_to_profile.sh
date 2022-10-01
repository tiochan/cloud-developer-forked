echo 'export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export DB_USERNAME="asdf"
export DB_PASSWORD="asdf"
export DB_DATABASE="asdf"
export DB_HOST="asdf"
export DB_DIALECT="postgres"
export AWS_REGION="us-east-1"
export AWS_PROFILE="default"
export AWS_MEDIA_BUCKET="asdf"
export JWT_SECRET="HelloWorld"' >> ~/.profile

echo "Vars added to ~/.profile"
echo "Please, edit that file and set the values properly."

