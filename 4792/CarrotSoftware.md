# Программное Обеспечение ***Carrot версии № 4792*** 

## Назначение программы

Программное обеспечение (далее - ПО) Carrot предназначено для визуальной обработки видео, в том числе передающегося в режиме реального времени.

---

## Функциональные возможности

К функциональным возможностям ПО Carrot относится:
* определение цветового пространства из модели RedGreenBlue (RGB) и добавление 3D графики по технологии "Keying";
* взаимодействие с видео, путём воспроизведения заготовленных анимаций.

В ПО Carrot реализован дополнительный функционал, который осуществляет:
* взаимодействие со Skylark;
* взаимодействие с Dalet.

---

## Общие сведения

[comment]: # (Указывается перечень программного обеспечения, необходимый для функционирования ПО Carrot)

Структурно, ПО Carrot состоит из следующих программных модулей:
* *[Carrot Server](CarrotServer.md);*
* *[DataStream Server](DataStreamServer.md);*
* *[Freed Sender](FreedSender.md);*
* *[Carrot Engine](CarrotEngine.md);*
* *[Launcher](Launcher.md);*
* *[Preview Engine](PreviewEngine.md);*
* *[System Monitor](SystemMonitor.md);*
* *[Template Preview](TemplatePreview.md);*
* *[Web Playlist Server](WebPlaylistServer.md);*
* *[Web Playlist Settings](WebPlaylistSettings.md);*
* *[XmlRpc Adapter Console Skylark](XmlRpcAdapterConsoleSkylark.md);*
* *[XmlRpc Adapter Settings Skylark](XmlRpcAdapterSettingsSkylark.md).*

Описание и первоначальная настройка программных модулей представлена в соответствующем *[разделе]()*.

>***ВАЖНО!*** 
>
>*Для корректного функционирования ПО Carrot, необходимо загрузить и установить:*
>
> *Сторонние программные компоненты:*
>* *[Компоненты среды выполнения библиотек "Visual C++ для Visual Studio 2013"](https://aka.ms/highdpimfc2013x64enu);*
>* *[Компоненты среды выполнения библиотек "Visual C++ для Visual Studio 2015, 2017, 2019 и 2022"](https://aka.ms/vs/17/release/vc_redist.x64.exe);*
>* *[Программная платформа "Microsoft .NET версии № 4.7.1"](https://www.softportal.com/getsoft-16133-microsoft-net-framework-4.html);*
>* *[Программная платформа "Microsoft .NET версии № 5.0"](https://www.softportal.com/getsoft-16133-microsoft-net-framework-4.html);*
>* *[Блок информационных данных размешения ".Net Core Hosting Bundle"](https://download.visualstudio.microsoft.com/download/pr/98ff0a08-a283-428f-8e54-19841d97154c/8c7d5f9600eadf264f04c82c813b7aab/dotnet-hosting-8.0.2-win.exe);*
>* *[Драйвер для устройства видеозахвата (видеокарты) Blackmagic](https://swr.cloud.blackmagicdesign.com/DesktopVideo/v12.8.1/Blackmagic_Desktop_Video_Windows_12.8.1.zip?verify=1709142783-ktES%2BMWHfKYVADdn4Z%2BQhRuCLq300a9QzUFvUVepSZo%3D);*
>* *[Драйвер для утройства преобразования графических образов (видеокарты) NVIDIA Studio](https://ru.download.nvidia.com/Windows/442.92/442.92-desktop-win10-64bit-international-nsd-dch-whql.exe).*
>
>*Стороннее ПО:*
>* *[Средство создания 3-ёх мерных объектов "Unreal Engine версии № 4.27.2"]();*
>* *[Средство создания 3-ёх мерных объектов "Unreal Engine версии № 5.1"]();*
>* *[Средство создания 3-ёх мерных объектов "Unreal Engine версии № 5.2"]().*

---

## Руководство по работе с Carrot

### Шаг 1. Инициализация программных модулей Carrot

Инициализация программных компонентов Carrot предназначена для их сопряжения между собой и создания единой базы данных.

>***ВАЖНО!*** 
>
>После инициализации программных компонентов, программный модуль Carrot Launcher будет использовать данные из созданной (инициализированной) базы данных.
>
>База данных, по умолчанию располагается по следующему пути:
>C:\Users"ИМЯ_КОМПЬЮТЕРА"\AppData\Local\Carrot\DB\

Для инициализации программных компонентов необходимо:
1. Открыть папку `Carrot`;
2. Открыть папку `Bin`;
3. Найти в списке файл с именем `InitSettings.exe` и запустить его от имени администратора;
4. В открывшемся окне нажать кнопку `ОК`.

>***ВАЖНО!*** 
>
>Для безопасного обновления **ПО Carrot** на новую сборку необходимо:
>
>1. Перейти по пути расположения исполняющих файлов Carrot: C:\Users"ИМЯ_КОМПЬЮТЕРА"\AppData\Local\ 
>2. Найти и скопировать в списке файл с именем **Carrot**;
>3. Произвести инициализацию программных компонентов новой сборки в соответветствии шагом 1.
>
>После этого обновление будет завершено. В случае, если потребуется вернуть версию, то нужно будет заменить папку **Carrot** на сохраненную ранее и запустить `InitSettings.exe` в директории необходимой версии.

### Шаг 2. Запуск основных программных модулей Carrot.

