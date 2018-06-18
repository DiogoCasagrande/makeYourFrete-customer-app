# makeYourFrete-customer-app
Rodando a aplicação no windows

Abra o prompt de comando como adiministrador 
e entao:

$ choco install -y nodejs.install python2 jdk8
$ npm install -g react-native-cli

instale o android Studio escolha a opcao *Custom durante a instalacao
e selecione as opcoes:

* Android SDK
* Android SDK Platform
* Perfomace (Intel HAXM)
* Android Virtual Device

e clique em Next.

Abra o android studio va em SDK Manager -> SDK Platforms 
e instale expanda Android 6.0 (Marshmallow):

* Google APIs
* Android SDK Platform 23
* Intel x86 Atom_64 System Image
* Google APIs Instel x86 Atom_64 System Imagem

Proximo passo é ir na aba SDK Tools ainda no SDK Manager e selecionar:

* 23.0.1

finalmente clicar em Apply*

_________________

Configurando a variavel de ambiente ANDROID_HOME.

No painel de controle do windows va em System and security -> Change settings -> Advanced -> Environment Variable, 
click em New* para criar uma nova variavel de ambiente chamada ANDROID_HOME usando o caminho o qual esta instalado o Android SDK.
por padrao o SDK vem instalado em: 
$ c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk

------------------

Prepare um virtual device atravez do android studio

______________________

Baixando o projeto e rodando a aplicacao.

Rodando a aplicação customer.

$ cd Documentos
$ git clone https://github.com/DiogoCasagrande/makeYourFrete-customer-app.git
$ cd makeYourFrete-customer-app
$ npm install
$ react-native run-android

Rodando a aplicaçao profissional.

$ cd Documentos
$ git clone https://github.com/DiogoCasagrande/makeYourFrete-professional-app.git
$ cd makeYourFrete-professional-app
$ npm install
$ react-native run-android
