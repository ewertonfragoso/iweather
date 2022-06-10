# :cloud: iWeather App

<p align="center">
  <img alt="iWeather App"
        src="assets/iWeather.png" width="400"/>
</p>
<br/>

# :partly_sunny: Versão 1.0

## :iphone: Telas

<p align="center">
  <img alt="iWeather App"
        src="assets/telas_iweather.png" />
</p>

#

## :package: Tecnologias e Detalhes

- React Native
- TypeScript
- React Navigation 6
- Fonte Personalizada: [Muli](https://www.fontsquirrel.com/fonts/muli)
- React-native-svg para uso de gráficos SVG em alguns locais.
- Requisição de Permissões para iOS e Android com react-native-permissions (Location).
- Busquei a localização do dispositivo com react-native-geolocation-service.
- React-native-dotenv para ocultar minha chave de API (.env) coloque sua chave no .env.blank e renomeie para .env
- Organização das Pastas segundo suas funcionalidades para melhor Arquitetura e Manutenção.
- Projetei a Interface aproveitando designs conceitos diversos da internet e criando o meu.
- Axios para as requisições de API externas.
- Animações básicas com Animated API do react-native.
- Fazer todos os ícones para os climas deu aquele trabalho, tradução e por ai vai, :)

To-do
- Adicionar Testes com Jest e Coverage
- Adicionar/Melhorar o handling de Error em tela para o usuário, por exemplo, para quando solicitado o Location e der algum erro, Timeout ou falha da requisição da API que fiz parcial.
- Implementar um mapa via bottom-sheet para melhor visualização do seu local.
- Implementar mais informações sobre o clima da semana na interface.

#

## :art: Design e Conceito


Concebi o design do aplicativo, ícone do App e demais grafismo de interface a partir de designs de conceitos de Apps de Clima e ícones de representação do tempo que fui vendo na internet e desenhei baseado neles, fazendo as alterações necessárias para implementar toda a gama de ícones base do [OpenWeatherMap](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2).

Acrescentei umas pequenas animações para dar mais dinâmica ao App devido os aplicativos de climas serem bem estáticos geralmente. 

Iniciei implementando a checagem e handling das permissões no iOS e Android, requisitando quando previsto, e informei ao usuário na interface que precisaria delas e qual seria a necessidade. Não chamei direto para poder ficar mais claro ao usuário o intuito.

Permitidas as solicitações, procedi pegando a localização do aparelho(latitude e longitude), tento sucesso procedo consultando a API do OpenWeatherMap e informo os principais dados do clima na tela para aquela localidade. 

Tracei a meta de gastar umas 28 horas de desenvolvimento em 7 dias e ver o que iria consequir fazer.

#
## Quick Start

Para clonar e rodar o App no seu computador

```sh
git clone https://github.com/ewertonfragoso/iweather.git iweather
```
Depois de clonado, configurar o .env.blank com sua chave gerada no [OpenWeatherMap.org](http://www.openweathermap.org) e renomear para .env, em seguida rodar normalmente o projeto se tiver o ambiente de simulador instalado com os comandos.

- `yarn install`
- `cd ios && pod install`
- `cd .. && yarn android/ios`
#

## Autor

Ewerton Fragoso, ewertonfragoso@g---l.com

## Licença

iWeathet is available under the MIT license. See the LICENSE file for more info.


