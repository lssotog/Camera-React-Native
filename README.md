# Camera-React-Native

A continuación los pasos para hacer este proyecto

## Primer Paso: Modificacion de permisos:
 Para Android los permisos se configuran en la ruta:
 ```
 android/app/src/main/AndroidManifest.xml
 ```

 Para IOS los permisos se configuran en la ruta:

  ```
 info.plist
 ```


## Primer Paso: Instalación automatica con autolinking (RN > 0.60)

Seguir los siguientes pasos:

1. Instalar el paquete de la camara:
```
npm install react-native-camera --save
```
2. En la consola ejecutar:
```
cd ios && pod install && cd ..
```


