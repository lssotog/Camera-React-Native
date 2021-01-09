# Camera-React-Native

A continuación los pasos para hacer este proyecto

## Primer Paso: Instalación automatica con autolinking (RN > 0.60)

Seguir los siguientes pasos:

1. Instalar el paquete de la camara:
```
npm install react-native-camera --save
```
2. En la consola ejecutar (para IOS):
```
cd ios && pod install && cd ..
```

## Segundo Paso: Modificacion de permisos:

### Android
 Para Android los permisos se configuran en la ruta:
 ```
 android/app/src/main/AndroidManifest.xml
 ```
 ### IOS
 Para IOS los permisos se configuran en la ruta:

```
info.plist
```
Agregar las siguientes lineas para configurar los permisos en el archivo info.plist:

```
<!-- Required with iOS 10 and higher -->
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>

<!-- Required with iOS 11 and higher: include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the camera roll -->
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>

<!-- Include this only if you are planning to use the microphone for video recording -->
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
```




