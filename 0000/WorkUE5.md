# Работа с Unreal Engine 5

В данном разделе можно ознакомиться с установкой **Unreal Engine**, настройкой создаваемых проектов и принципом его взаимодействия с **Carrot**.

>Перед началом работы с **Unreal Engine 5** необходимо произвести установку (инициализацию) и первоначальную настройку приложений **Carrot**.


## Установка Epic Games Launcher

Для установки Epic Games Launcher необходимо:

![1.1.](..\images\UnrealEngine\Установка%20EGL\1.1.jpg)

1. Перейти на сайт [`Epic Games Store`](https://store.epicgames.com/) и нажать на кнопку [`Загрузить/Download`](https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=dc4b0d2024ff48528e324e6a3e5ba8cf) и дождаться завершения загрузки установщика.

2. После загрузки установщика **Epic Games Launcher** необходимо его запустить и провести процедуру инсталяции на локальную рабочую станцию.

![1.2.](..\images\UnrealEngine\Установка%20EGL\1.2.jpg)

3. Запустить установленный **Epic Games Launcher** и авторизоваться (создать или войти в учётную запись) в нём.

>В случае, если не войти в учётную запись при нажатия на кнопку **Войти позже** в окне авторизации, установка **Unreal Engine** будет невозможна.

![1.3.](..\images\UnrealEngine\Установка%20EGL\1.3.jpg)

4. С целью скрытия информации некасающейся работы с **Unreal Engine**, следует соблюсти следующие действия:

- перейти в раздел **"Параметры"**;
- включить параметры **"Скрыть игровую библиотеку"** и **"Запустить при включение компьютера"**;
- отключить параметры **"Отображать игровые уведомления"** и **"Показывать уведомления о новостях и специальных предложениях"**.

![1.4.](..\images\UnrealEngine\Установка%20EGL\1.4.jpg)

## Установка Unreal Engine 5

Для установки **Unreal Engine 5** необходимо:

![2.1.](..\images\UnrealEngine\Установка%20UE5\2.1.jpg)

1. Открыть **Epic Games Launcher**, перейти в раздел **Unreal Engine** и нажать на вкладку **"Библиотека"**.

![2.2.](..\images\UnrealEngine\Установка%20UE5\2.2.jpg)

2. Нажать кнопку **"+"** и выпадающем списке выбрать необходимую версию **Unreal Engine**.

![2.3.](..\images\UnrealEngine\Установка%20UE5\2.3.jpg)

3. Нажать кнопку **"Установить"** и дождаться окончания инсталяции **Unreal Engine**.



## Создание проекта Unreal Engine 5

Для создания проекта в **Unreal Engine**, необходимо:

![3.1.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.1.jpg)

1. Запустить установленный **Unreal Engine**.

![3.2.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.2.jpg)

2. После запуска **Unreal Engine** откроется окно **"Unreal Project Browser"**, в котором необходимо присвоить проекту имя и соблюсти следующие действия:
- нажать на вкладку **"Games"** (1);
- нажать на шаблон **"Blank"** (2);
- в свойствах проекта выбрать режим **"BLUEPRINT"** (проект без кода) (3);
- убрать галочку с параметра **"Starter Content"** (4);
- нажать кнопку **"Create"** (5).



## Установка Carrot Unreal Engine Plugin

>Актуальные версии плагинов **Unreal Engine**.
>
>|Наименование плагина|Поддерживаемая версия Unreal Engine|Примечание|
>|-------------------|----------|----------|
>|UEPlugin4.27_3.1.0_172|Unreal Engine 4.27|Отсутствует поддержка присваивания переменных|
>|UEPlugin5.1_5.0_172.zip|Unreal Engine 5.1|Отсутствует поддержка присваивания переменных|
>|UEPlugin5.2_5.0_172|Unreal Engine 5.2|Отсутствует поддержка присваивания переменных|

Для установки **Carrot Unreal Engine Plugin** необходимо:

1. Открыть содержимое папки **Carrot Unreal Engine Plugin**.

![4.1.](..\images\UnrealEngine\Установка%20Carrot%20UEP\4.1.jpg)

2. Скопировать папки **"Carrot"** и **"CarrotEditor"** в папку **Plugins** созданного проекта **Unreal Engine**.

>По умолчанию созданный проект **Unreal Engine** располагается в следующей директории: 
>`C:\Users\Имя_Пользователя\Documents\Unreal Projects\Наименование_Проекта\plugins`
>
>В случае, если папка **"plugins"** отсутствует в директории с проектом, необходимо её создать.
>
>Информацию об используемой версии плагина можно узнать в файле **"Rev.txt"** папок **"Carrot"** и **"CarrotEditor"**.

3. Запустить созданный проект **Unreal Engine**, открыть раздел **Edit** и перейти в окно **"Plugins"**;

![4.2.](..\images\UnrealEngine\Установка%20Carrot%20UEP\4.2.jpg)

4. Найти установленные плагины **"Carrot"** и **"CarrotEditor"** путём ввода в поисковую строку **"сarrot"**, и убедиться в том, что они включены.



## Настройка проекта Unreal Engine

Перед настройкой проекта **Unreal Engine** необходимо отредактировать файл **"DefaultEngine.ini"**.

>Файл **"DefaultEngine.ini"** по умолчанию располагается в директории созданного **Unreal Engine** проекта, а именно:  
>
>`C:\Users\Имя_Пользователя\Documents\Unreal Projects\Наименование_Проекта\Config\DefaultEngine.ini`

Для редактирования файла **"DefaultEngine.ini"** можно воспользоваться текстовым редактором и скопировать в него следующие команды:

```Текстовые команды
[/Script/Engine.Engine]
GameEngine=/Script/Carrot.CarrotGameEngine
GameViewportClientClassName=/Script/Carrot.CarrotViewportClient
CustomTimeStepClassName=/Script/Carrot.CarrotCustomTimeStep

[/Script/WindowsTargetPlatform.WindowsTargetSettings]
DefaultGraphicsRHI=DefaultGraphicsRHI_DX12
```
>В качестве текстовых редакторов могут использоваться встроенные приложения Windows, такие как: "Блокнот", "WordPad" и т.п.

Для настройки проекта **Unreal Engine** необходимо:

1. Открыть созданный проект **Unreal Engine**.

![5.1.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.1.jpg)

2. Открыть окно создания уровней с помощью сочетания клавиш `Ctrl + N`, выбрать **"Empty Level"** и нажать кнопку **"Create"**.

3. В разделе **Edit** перейти в настройки **"Editor Preferences"** и отключить параметр **"Use Less CPU when in Background"**.

4. В разделе **Edit** перейти в настройки **"Project Settings"** и настроить следующие параметры представленные в таблице:

|Наименование параметра|Значение параметра|
|-------------------|----------|
|Custom TimeStep|`CarrotCustomTimeStep`|

>Параметр **"Custom TimeStep"** с характеристикой **"CarrotCustomTimeStep"** предназначен для синхронизации кадров, в случае, если ему присвоена характеристика **"None"**, то повысится производительность (количество кадров) в **"Unreal Editor"**, но существенно уменьшится в **"Carrot Engine"**.

|||
|-------------------|----------|
|Game Viewport Client Class|`CarrotViewportClient`|
|Editor Startup Map|`MainScene (Главный уровень)`|
|Game Default Map |`MainScene (Главный уровень)`|
|Transition Map|`MainScene (Главный уровень)`|
|Server Default Map|`MainScene (Главный уровень)`|
|Smoothed Frame Rate Range|`Min: 50 / Max: 200`|
|Min Desired Frame Rate|`200`|
|Frame Buffer Pixel Format|`8bit RGBA`|
|Anti-Aliasing Method|`Temporal Anti-Aliasing (TAA)`|
|Custom Depth-Stencil Pass|`Enabled with Stencil`|
|Enable alpha channel support in post processing (experimental)|`Allow through tonemapper`|

![5.2.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.2.jpg)

5. После настройки параметров, необходимо произвести настройку рабочего пространства с целью отображения полного переченя рабочей информации, для этого в разделе **"Window"** добавить следующие окна представленные в таблице:

|Наименование окна|Назначение|
|-------------------|----------|
|`Outliner`|Отображение всех используемых компонентов в проекте.|
|`Levels`|Разграничение используемых компонентов по уровням.|
|`Layers`|Объединение компонентов в одну группу по слоям.|

>В случае необходимости, в Unreal Engine 5 имеется возможность включить интерфейс Unreal Engine 4, для этого перейти в раздел **"Window"**, открыть окно **"Load Layout"** и включить два параметра: **"Default Editor Layout"** и **"UE4 Classic Layout"**.

![5.3.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.3.jpg)

![5.4.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.4.jpg)

6. В результате настройки рабочего пространства, следует указать следующее:

- в добавленном окне **Outliner** нажать на кнопку `⚙` и включить параметр `Only in Current Level`;
- открыть окно **Content Drawer**, нажать кнопку `⚙ Settings` и выключить все параметры в разделе **Content**.



## Подготовка проекта Unreal Engine для работы с Carrot

Для подготовки проекта **Unreal Engine** к работе с **Carrot** необходимо:

![6.1.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.1.jpg)

![6.2.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.2.jpg)

![6.3.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.3.jpg)

1. Добавить с помощью кнопки **Quickly add to the project** на сцену главного уровня следующие компоненты представленные в таблице:

|Наименование раздела|Наименование компонента|Количество|
|-------------------|----------|----------|
|**Basic**|`Actor`|3 шт.|
|**Cinematic**|`Cine Camera Actor`|1 шт.|
|**Volumes**|`Post Process Volume`|1 шт.|

![6.4.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.4.jpg)

2. В окне **Outliner** выделить все добавленные компоненты, перейти в окно **Details** и в разделе настроек **Transform** сбросить параметр **Location**.

![6.5.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.5.jpg)

3. Переименовать (c помощью клавиши `F2` при выделении компонента) и сгруппировать компоненты **CameraNull**, **CameraOffests**, **CameraParent** и **CarrotCamera** путём их перемещения по следующей иерархической модели:

|Порядковый номер|Наименование компонента|Тип компонента|
|-------------------|----------|----------|
|1|**CameraNull**|`Actor`|
|2|**CameraOffsets**|`Actor`|
|3|**CameraParent**|`Actor`|
|4|**CarrotCamera**|`CineCameraActor`|

![6.6.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.6.jpg)

4. Выбрать компонент **CarrotCamera**, перейти в окно **Details**, найти в разделе **Current Camera Settings** настройку **Lens Settings** и параметру **Min Focal Length** выставить значение **0.001mm**.

![6.7.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.7.jpg)

![6.8.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.8.jpg)

5. Выбрать компонент **PostProcessVolume**, перейти в окно **Details**, найти в разделе **Post Process Volume Settings** и включить настройку **Infinite Extent (Unbound)**, затем в разделе **Rendering Features** найти настройку **Post Process Materials** и добавить параметру **Array** 2 характеристики с помощью кнопки `⊕`, а именно:

- **Характеристика № 1**: нажать **Choose**, выбрать **Asset reference** и присвоить значение **PostProcMat_Alpha**;

>Данная характеристика необходима для оптимизации процесса отображения графики и реализации функционала работы **CustomStencil**.

- **Характеристика № 2**: нажать **Choose**, выбрать **Asset reference** и присвоить значение **PostProcMat_Frames**

>Данная характеристика необходима для определения разрешения изображения для передачи её в **Carrot Engine**.

![6.9.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.9.jpg)

6. С помощью кнопки **List of world Blueprints available to the user for editing or creation** нажать на кнопку **Open Level Blueprint**.

>В результате проделанных действий откроется **система визуального программирования (Level Blueprint)**, где в окне **Event Graph** отобразятся следующие ноды (блок распределения и обработки данных, действий и событий), представленные в таблице:
>
>![6.10.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.10.jpg)
>
>|Наименование ноды|Назначение|
>|-------------------|----------|
>|`Event BeginPlay`|Однократная активация события при запуске уровня.|
>|`Event Tick`|Покадровая активация события.|

![6.11.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.11.jpg)

7. Из точки выхода ноды **Event BeginPlay** проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

![6.12.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.12.jpg)

8. В появившемся окне **Executable actions** с помощью поисковой строки найти ноду **Carrot Macro** и добавить её.

![6.13.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.13.jpg)

9. Из проекта **Unreal Engine** переместить компоненты **CameraOffsets**, **CameraParent** и **CarrotCamera** в окно **Level Blueprint**, затем соединить все добавленные ноды с **Carrot Macro**.

![6.14.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.14.jpg)

10. Из точки выхода **Command Loop** ноды **Carrot Macro** проложить связь в свободное пространство окна **Level Blueprint**, в открывшемся окне с помощью поисковой строки найти **Switch on String**, затем соединить точку выхода **Command** ноды **Carrot Macro**  с точкой входа **Selection** у ноды **Switch on String**.

![6.15.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.15.jpg)

11. В ноде **Switch on String** с помощью команды `Add pin ⊕` создаём требуемое количество строк (ивентов) (в качестве **примера** будут рассматриваться **5 строк (ивентов)**, представленные в таблице).

|Наименование строки (ивента)|Назначение|
|-------------------|----------|
|`START`|"Пустой ивент", предназначенный для синхронизации **Unreal Engine** и **Carrot**. Используется всегда.|
|`SHOW`|Включение режима отображения графики.|
|`HIDE`|Отключение режима отображения графики.|
|`PLAY`|Воспроизведение анимации.|
|`RESET`|Сброс анимации.|

>Присвоенное строке имя, будет отображаться в Web Playlist (Carrot Dashboard) в качестве **ивента**.
>
>Созданная строка (ивент) в ноде **Switch on String** запускает созданный сценарий (используя другие ноды **Level Blueprint**) после себя, тем самым реализуя различный функционал, например: **воспроизведение и сброс анимации**, **включение режима отображения графики** и т.п.

12. **Нажать** кнопку `🖫` (`Save`) и **запустить** процесс компиляции с помощью соответствующей кнопки `Compile`.

![6.16.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.16.jpg)

13. После запуска процесса компиляции, отобразится сообщение **ERROR!** у ноды **Carrot Macro**. Для исправления ошибки компиляции, необходимо нажать на точку входа `Settings` ноды **Carrot Macro** используя `правую кнопку мыши (ПКМ)`, выбрать `Split Struct Pin` и повторно запустить компиляцию с помощью кнопки `Compile`.

![6.17.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.17.jpg)

>Сообщение **ERROR!** ноды **Carrot Macro** появляется вследствии специфики работы **Unreal Engine** с **Carrot**.



## Создание RTT 

**Render Target Texture (RTT)** - представляет из себя текстуру, в которую возможна передача медиа в режиме реального времени.

>![7.1.](..\images\UnrealEngine\Создание%20RTT\7.1.jpg)
>
>**RTT** возможно применить к любому объекту и материалу. В телеиндустрии наиболее распространено использование **RTT** в качестве имитации **плазменных панелей**.

Для создаания **RTT** необходимо:

![7.2.](..\images\UnrealEngine\Создание%20RTT\7.2.jpg)

1. Нажать в пустом месте окна **Content Drawer** `правую кнопку мыши (ПКМ)`, перейти в раздел **Texture**, выбрать объект **Render Target** и задать ему имя (в качетсве примера, используется имя объекта **RTT_01**).

>Количество используемых **Render Target** в проекте прямопропорционально планируемому количеству отображаемых изображений (видео-материалов). 

![7.3.](..\images\UnrealEngine\Создание%20RTT\7.3.jpg)

2. **Открыть окно редактирования** созданного **RTT** объекта (**RTT_01**) используя двойное нажатие `левой кнопки мыши (ЛКМ)` на нём, перейти в раздел **Details** и **присвоить** параметрам следующие значения представленные в таблице.

|Наименование параметра|Значение параметра|
|-------------------|----------|
|Min Gen Settings|`NoMipmaps`|
|Size X|`2048`|
|Size Y|`2048`|
|Address X|`Clamp`|
|Address Y|`Clamp`|
|Render Target Format|`RTF RGBA8`|

3. **Нажать** кнопку `🖫` (`Save`) и закрыть **окно редактирования**.

![7.4.](..\images\UnrealEngine\Создание%20RTT\7.4.png)

4. С помощью кнопки `List of world Blueprints available to the user for editing or creation` открыть окно **Level Blueprint** путём нажатия на кнопку `Open Level Blueprint`.

>Далее рассматривается пример с учётом созданной ранее схемы  в **Level Blueprint** из раздела **Подготовка проекта Unreal Engine для работы с Carrot**

![7.5.](..\images\UnrealEngine\Создание%20RTT\7.5.jpg)

5. Из точки выхода **Begin Play Out** ноды **Carrot Маско** проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

6. В появившемся окне **Executable actions** с помощью поисковой строки найти ноду **Carrot Reciever** и добавить её.

![7.6.](..\images\UnrealEngine\Создание%20RTT\7.6.jpg)

7. В параметре **Texture Render Targer 2D** ноды **Carrot Reciever** выбрать созданный **RTT** (RTT_01), **запустить** процесс компиляции с помощью кнопки `Compile`, **нажать** кнопку `🖫` (`Save`) и закрыть окно **Level Blueprint**.

![7.7.](..\images\UnrealEngine\Создание%20RTT\7.7.jpg)

8. Нажать на кнопку **Quickly add to the project**, перейти в раздел **Shapes** и добавить элемент **"Plane"** (**Плоскость**) напротив компонента **CarrotCamera**.

9. Открыть окно **Details** элемента **"Plane"** путём нажатия на него `левой кнопки мыши (ЛКМ)`, перейти в раздел **Materials** и параметру `Element 0` выбрать созданный **RTT** объект.



## Экспорт шаблона из проекта Unreal Engine

Экспорт шаблонов необходим для сохранения заготовленных проектов **Unreal Engine** в формате, позволяющему воспроизводить их Carrot Engine. Заготовленные шаблоны запускаются из Web Playlist (Carrot Dashboard).

Для экспорта шаблона из проекта **Unreal Engine** необходимо:

![8.1.](..\images\UnrealEngine\Экспорт%20Шаблона%20UE\8.1.jpg)

1. Нажать на кнопку **Export As Carrot Template**.

2. В открывшемся окне **Template Preview** нажать кнопку `🖫` (`Save`).

3. Откроется окно **Templates**, в котором необходимо присвоить имя экспортируемого шаблона в окне **Name** (в качестве примера, используется имя `MyProject`) и нажать кнопку **Save Template**.

4. В открывшемся окне выбрать **схему Carrot Engine** для запуска шаблонов **Unreal Engine**, затем отметить необходимый контейнер из списка доступных и нажать кнопку `ОК`.



## Создание ивентов Unreal Engine в Web Playlist (Carrot Dashboard)

Для создания ивента **Unreal Engine** необходимо:

![9.1.](..\images\UnrealEngine\Создание%20Ивентов%20UE\9.1.jpg)

1. Открыть **окно "Editor"**.

2. Открыть **Template Manager**.

3. Выбрать экспортированный шаблон **Unreal Engine** `правой кнопкой мыши (ПКМ)` и нажать кнопку `Generate Events`. **Playlist** заполнится ивентами, указанными ранее в окне **Level Blueprint** у ноды **Switch on String** (`START`, `SHOW`, `HIDE`, `PLAY` и `RESET`).



## Запуск ивента Unreal Engine

Для запуска ивента **Unreal Engine** через Web Playlist (Carrot Dashboard) необходимо:

![10.1.](..\images\UnrealEngine\Запуска%20Ивента%20UE\10.1.jpg)

1. Выбрать в **окне "Editor"** один из сгенерированных ивентов (в качестве примера используется ивент `START`).

2. Открыть **Event Properties**, нажать кнопку `≡` у созданного объекта **RTT** и в выпадающем списке выбрать `Browse`.

3. В открывшемся окне выбрать необходимый для отображения на объекте **RTT** медиа-файл (в примере используется файл формата `.png`).

4. Перед запуском ивента убедиться, что запущены и настроены все необходимые приложения Carrot (`Carrot Server`, `Web Playlist Server`, `Launcher` и `System Monitor`).

![10.2.](..\images\UnrealEngine\Запуска%20Ивента%20UE\10.2.jpg)

5. Открыть **окно "Playlist"**, выбрать с помощью `левой кнопкой мыши (ЛКМ)` необходимый для запуска ивент (в качестве примера выбран ивент `START`) и нажать клавишу `Пробел` на клавиатуре.

![10.3.](..\images\UnrealEngine\Запуска%20Ивента%20UE\10.3.jpg)

6. В окне **Carrot Engine** отобразится окончательный результат экспортированного проекта **Unreal Engine**.


