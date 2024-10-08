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

2. Нажать кнопку `+` и выпадающем списке выбрать необходимую версию **Unreal Engine**.

3. Нажать кнопку `Установить` и дождаться окончания инсталляции **Unreal Engine**.

>В случае установки **Unreal Engine** впервые, после нажатия кнопки `Установить` отобразится окно с **Параметрами установки**. С целью оптимизации процесса установки, следует отключить компоненты, не использующиеся при работе с **Carrot**, а именно: **Android**, **IOS** и **Linux**
>![2.3.](..\images\UnrealEngine\Установка%20UE5\2.3.jpg)



## Создание проекта Unreal Engine 5

Для создания проекта в **Unreal Engine**, необходимо:

![3.1.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.1.jpg)

1. Запустить установленный **Unreal Engine**.

![3.2.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.2.jpg)

2. После запуска **Unreal Engine** откроется окно **"Unreal Project Browser"**, в котором необходимо присвоить проекту имя и соблюсти следующие действия:
- нажать на вкладку `Games` (1);
- нажать на шаблон `Blank` (2);
- в свойствах проекта выбрать режим `BLUEPRINT` (проект без кода) (3);
- убрать галочку с параметра `Starter Content` (4);
- нажать кнопку `Create` (5).



## Установка Carrot Unreal Engine Plugin

Перед установкой **Carrot Unreal Engine Plugin** необходимо закрыть запущенный проект.

>Актуальные версии плагинов для **Unreal Engine**.
>
>|Наименование плагина|Поддерживаемая версия Unreal Engine|Примечание|
>|-------------------|----------|----------|
>|UEPlugin4.27_3.1.0_172|Unreal Engine 4.27|Отсутствует поддержка присваивания переменных. Строго указаны параметры камеры в ноде `Carrot Macro`|
>|UEPlugin5.1_5.0_172.zip|Unreal Engine 5.1|Отсутствует поддержка присваивания переменных. Строго указаны параметры камеры в ноде `Carrot Macro`|
>|UEPlugin5.2_5.0_172|Unreal Engine 5.2|Отсутствует поддержка присваивания переменных. Строго указаны параметры камеры в ноде `Carrot Macro`|

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

Перед настройкой проекта **Unreal Engine** необходимо закрыть запущенный проект и отредактировать файл **"DefaultEngine.ini"**.

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

2. Открыть окно создания уровней с помощью сочетания клавиш `Ctrl + N`, выбрать `Empty Level` и нажать кнопку `Create`.

3. Сохранить созданный уровень с помощью сочетания клавиш `Ctrl + S`, откроется окно **Save Level As**, в котором в строке `Name` ввести наименование сохраняемого уровня (в примере указывается **MainScene**) и нажать кнопку `Save`.

4. В разделе `Edit` перейти в настройки `Editor Preferences`, в строку поиска ввести наименование параметра **"Use Less CPU when in Background"** и отключить его.

5. В разделе `Edit` перейти в настройки `Project Settings` и проверить (в случае необходимости настроить) используя поисковую строку следующие параметры в соответствии с таблицей ниже:

|Наименование параметра|Значение параметра|
|-------------------|----------|
|Custom TimeStep|`CarrotCustomTimeStep`|

>Значение `CarrotCustomTimeStep` параметра **Custom TimeStep** позволяет обеспечить покадровую синхронизацию **Carrot** c трекинг данными и видеосигналом проекта **Unreal Engine**. С данным значением, количество FPS при работе с проектом **Unreal Engine** будет низким до момента его отображения в **Carrot Engine** и запуска в режиме **Play Mode**. Для увеличения количества FPS, на **время работы** с проектом **Unreal Engine**, рекомендуется параметру **Custom TimeStep** присвоить значение `None`, но после окончания работ, необходимо обратно установить значение `CarrotCustomTimeStep` .

|||
|-------------------|----------|
|Game Viewport Client Class|`CarrotViewportClient`|
|Editor Startup Map|`MainScene (Наименование сохранённого уровня)`|
|Game Default Map |`MainScene (Наименование сохранённого уровня)`|
|Frame Buffer Pixel Format|`8bit RGBA`|
|Anti-Aliasing Method|`Temporal Anti-Aliasing (TAA)`|

>В случае присвоения параметру **Anti-Aliasing Method** значения **Temporal Super-Resolution (TSR)**, возможна некорректная обработка отдельных графических элементов при взаимодействии с **Carrot**. 

|||
|-------------------|----------|
|Custom Depth-Stencil Pass|`Enabled with Stencil`|
|Enable alpha channel support in post processing (experimental)|`Allow through tonemapper`|

![5.2.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.2.jpg)

6. После настройки параметров и закрытия соответствующего окна, необходимо адаптировать рабочее пространство к отображению полного переченя рабочей информации, для этого в разделе `Window` добавить следующие окна представленные в таблице:

|Наименование окна|Назначение|
|-------------------|----------|
|`Outliner`|Отображение всех используемых компонентов в проекте.|
|`Levels`|Разграничение используемых компонентов по уровням.|
|`Layers`|Объединение компонентов в одну группу по слоям.|

>В **Unreal Engine 5** имеется возможность включить интерфейс **Unreal Engine 4**, для этого необходимо перейти в раздел `Window`, выбрать `Load Layout` и **включить** параметр `UE4 Classic Layout`.

![5.4.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.4.jpg)

![5.3.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.3.jpg)

7. В результате адаптации рабочего пространства, следует также настроить:

- в окне **Outliner** нажать на кнопку `⚙` и включить параметр `Only in Current Level`;
- открыть окно **Content Drawer/Content Browser**, нажать кнопку `⚙ Settings` и отключить все параметры в разделе **Content**, кроме `Show Plugin Content`.



## Подготовка проекта Unreal Engine для работы с Carrot

Для подготовки проекта **Unreal Engine** к работе с **Carrot** необходимо:

![6.1.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.1.jpg)

![6.2.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.2.jpg)

![6.3.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.3.jpg)

1. Добавить с помощью кнопки `Quickly add to the project` на сцену главного уровня следующие компоненты представленные в таблице:

|Наименование раздела|Наименование компонента|Количество|
|-------------------|----------|----------|
|**Basic**|`Actor`|3 шт.|
|**Cinematic**|`Cine Camera Actor`|1 шт.|
|**Volumes**|`Post Process Volume`|1 шт.|

![6.4.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.4.jpg)

2. В окне **Outliner** выделить все добавленные компоненты, перейти в окно **Details** и в разделе настроек `Transform` сбросить параметр `Location` с помощью кнопки `Reset`.

![6.5.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.5.jpg)

3. Переименовать (c помощью клавиши `F2` при выделении компонента) и сгруппировать компоненты **CameraNull**, **CameraOffsets**, **CameraParent** и **CarrotCamera** путём их перемещения по следующей иерархической модели:

|Порядковый номер|Наименование компонента|Тип компонента|Назначение|
|-------------------|----------|----------|----------|
|1|**CameraNull**|`Actor`|Разграничение логики перемещения виртуальной камеры в проекте относительно других объектов. Используется для свободного перемещения камеры в пределах уровня.|
|2|**CameraOffsets**|`Actor`|Передача значений точек смещения (Offset: X, Y, Z. Rotation: Pan, Tilt, Roll) виртуальной камеры. Используется для точечного позиционирования в пределах уровня.|
|3|**CameraParent**|`Actor`|Приём значений точек смещения (Offset: X, Y, Z. Rotation: Pan, Tilt, Roll) камеры. Позволяет перемещать виртуальную камеру на основе полученных значений от трекинг системы камеры.|
|4|**CarrotCamera**|`CineCameraActor`|Приём технических характеристик камеры (фокусное расстояние, размер сенсора и т.п.). Позволяет присвоить принятые технические характеристики виртуальной камере.|

![6.6.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.6.jpg)

4. Выбрать компонент **CarrotCamera**, перейти в окно **Details**, найти в разделе `Current Camera Settings` настройку `Lens Settings` и параметру `Min Focal Length` выставить значение `0.001mm`.

![6.7.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.7.jpg)

![6.8.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.8.jpg)

5. Выбрать компонент **PostProcessVolume**, перейти в окно **Details**, перейти в раздел `Post Process Volume Settings` и включить настройку `Infinite Extent (Unbound)`, затем в разделе `Rendering Features` найти настройку `Post Process Materials` и **добавить** параметру `Array` **2 значения** с помощью кнопки `⊕`, а именно:

- **Значение № 1**: нажать `Choose`, выбрать `Asset reference` и присвоить используя поисковую строку значение `PostProcMat_Alpha`;

>Данное значение необходимо для реализации функционала работы **CustomStencil**.

- **Значение № 2**: нажать `Choose`, выбрать `Asset reference` и присвоить используя поисковую строку значение `PostProcMat_Frames`.

>Данное значение необходимо для синхронизации кадров между проектом **Unreal Engine** и **Carrot Engine**.

![6.9.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.9.jpg)

6. С помощью элемента `List of world Blueprints available to the user for editing or creation` нажать на кнопку `Open Level Blueprint`.

>В результате проделанных действий откроется **система визуального программирования (Level Blueprint)**, где в окне **Event Graph** отобразятся следующие ноды (блок распределения и обработки данных, действий и событий), представленные в таблице:
>
>![6.10.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.10.jpg)
>
>|Наименование ноды|Назначение|
>|-------------------|----------|
>|`Event BeginPlay`|Однократная активация события при запуске уровня.|
>|`Event Tick`|Покадровая активация события.|

![6.11.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.11.jpg)

7. Из точки выхода ноды `Event BeginPlay` проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

![6.12.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.12.jpg)

8. В появившемся окне **Executable actions** с помощью поисковой строки найти ноду `Carrot Macro` и добавить её.

![6.13.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.13.jpg)

9. Из проекта **Unreal Engine** переместить компоненты **CameraOffsets**, **CameraParent** и **CarrotCamera** в окно **Level Blueprint**, затем соединить все добавленные ноды с **Carrot Macro** в следующем порядке:
- ноду `Event Tick` с точкой входа `Event Tick`;
- ноду `CameraOffsets` с точкой входа `Tracking Offsets`;
- ноду `CameraParent` с точкой входа `Camera Parent`;
- ноду `CarrotCamera` с точкой входа `Cine Camera`;

![6.14.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.14.jpg)

10. Из точки выхода `Command Loop` ноды `Carrot Macro` проложить связь в свободное пространство окна **Level Blueprint**, в открывшемся окне с помощью поисковой строки найти ноду `Switch on String`, затем соединить точку выхода `Command` ноды `Carrot Macro` с точкой входа `Selection` у ноды `Switch on String`.

![6.15.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.15.jpg)

11. В ноде `Switch on String` с помощью команды `Add pin ⊕` создаём требуемое количество строк (ивентов). В качестве **примера** будут рассматриваться **5 строк (ивентов)**, представленные в таблице ниже.

|Наименование строки (ивента)|Назначение|
|-------------------|----------|
|`START`|"Пустой ивент". Используется для отображения уровня в Carrot Engine с объектива виртуальной камеры.|
|`SHOW`|Включение режима отображения графики.|
|`HIDE`|Отключение режима отображения графики.|
|`PLAY`|Воспроизведение анимации.|
|`RESET`|Сброс анимации.|

>**Переименовать** созданные строки (ивенты) можно в настройках `Pin Names` раздела `Pin Options` в окне **Details** (по умолчанию находится справа при выделении ноды). 
>
>**Во избежаение некорректной работы системы**, строку (ивент) `Default` следует **удалить**, путём нажатия на неё `правой кнопкой мыши (ПКМ)` и выбора команды `Remove Execution Pin`.
>
>Присвоенное строке имя, будет отображаться в Web Playlist (Carrot Dashboard) в качестве **ивента**.
>
>Созданная строка (ивент) в ноде **Switch on String** запускает созданный сценарий (используя другие ноды **Level Blueprint**) после себя, тем самым реализуя различный функционал, например: **воспроизведение и сброс анимации**, **включение режима отображения графики** и т.п.

12. **Нажать** кнопку `🖫` (`Save`) и **запустить** процесс компиляции с помощью соответствующей кнопки `Compile`.

>В случае, если после запуска процесса компиляции, отобразилось сообщение **ERROR!** у ноды `Carrot Macro`, необходимо убедиться в использовании **корректной** версии плагина (указаны в разделе **"Установка Carrot Unreal Engine Plugin"**).
>
> ![6.16.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.16.jpg)
> 
> Для исправления ошибки компиляции, необходимо нажать на точку входа `Settings` ноды **Carrot Macro** используя `правую кнопку мыши (ПКМ)`, выбрать `Split Struct Pin` и повторно запустить компиляцию с помощью кнопки `Compile`.
> 
>![6.17.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.17.jpg)

13. Закрыть окно **Level Blueprint**.



## Создание RTT 

**Render Target Texture (RTT)** - представляет из себя текстуру, в которую возможна передача медиа в режиме реального времени.

>![7.1.](..\images\UnrealEngine\Создание%20RTT\7.1.jpg)
>
>**RTT** возможно применить к любому объекту и материалу. В телеиндустрии наиболее распространено использование **RTT** в качестве имитации **плазменных панелей**.

Для создаания **RTT** необходимо:

![7.2.](..\images\UnrealEngine\Создание%20RTT\7.2.jpg)

1. Нажать в пустом месте окна **Content Drawer/Content Browser** `правую кнопку мыши (ПКМ)`, перейти в раздел `Texture` и выбрать объект `Render Target` задав ему имя (в качестве примера, используется имя объекта **RTT_01**).

>Количество используемых **Render Target** в проекте прямопропорционально планируемому количеству отображаемых изображений (видео-материалов). 

![7.3.](..\images\UnrealEngine\Создание%20RTT\7.3.jpg)

2. **Открыть окно редактирования** созданного **RTT** объекта (**RTT_01**) используя двойное нажатие `левой кнопки мыши (ЛКМ)` на нём, перейти в окно **Details** и **присвоить** параметрам следующие значения представленные в таблице.

|Наименование параметра|Значение параметра|
|-------------------|----------|
|Min Gen Settings|`NoMipmaps`|
|Size X|`2048`|
|Size Y|`2048`|

>Значение параметров **Size X** и **Size Y** необходимо присваивать в соответствии с принимаемым разрешением сигнала.
>
>Пример: 
>- если планируется приём SDI сигнала с разрешением **1920х1080**, значение параметров **Size X** и **Size Y** необходимо выставить `1920` и `1080` соответственно;
>- если планируется приём шаблона After Effects c разрешением **2547х782**, значение параметров **Size X** и **Size Y** необходимо выставить `2547` и `782` соответственно.
>
>В случае присвоения некорректных значений параметрам **Size X** и **Size Y** возможен сбой отображения принимаемого сигнала. 

|||
|-------------------|----------|
|Address X|`Clamp`|
|Address Y|`Clamp`|
|Render Target Format|`RTF RGBA8`|

3. **Нажать** кнопку `🖫` (`Save`) и закрыть **окно редактирования**.

>Перед использованием созданного **RTT** объекта (текстуры), необходимо создать **материал** в котором он будет задействоваться. В качестве примера, создадим материал имитирующий **плазменную панель** для этого необходимо:
>
>- нажать в пустом месте окна **Content Drawer/Content Browser** `правую кнопку мыши (ПКМ)`, перейти в раздел `Material` и выбрать `Material` задав ему имя (в примере используется **TV_01**);
>- перейти в окно **редактирования** двойным нажатием `левой кнопкой мыши (ЛКМ)` по созданному объекту (материалу);
>- создать ноду (используя `правую кнопки мыши (ПКМ)` при нажатии по пустому пространству окна **редактирования**) `Texture Sample`;
>- соединить точку выхода `RGB` ноды `Texture Sample` с точкой входа `Emissive Color` ноды материала `TV_01 (Используется в примере)`;
>- соединить точку выхода `А` ноды `Texture Sample` с точкой входа `Opacity` ноды материала `TV_01 (Используется в примере)`;
>- выбрать ноду `Texture Sample`, перейти в окно **Details**, в разделе `Material` параметру `Blend Mode` и `Shading Model` выбрать `Translucent` и `Unlit` соответственно, далее перейти в раздел `Material Expression Texture Base` и параметру `Texture` указать созданный ранее **RTT** (**RTT_01**). 
>- **нажать** кнопку `🖫` (`Save`) и закрыть **окно редактирования**
>
>![7.3.1.](..\images\UnrealEngine\Создание%20RTT\7.3.1.jpg)

![7.4.](..\images\UnrealEngine\Создание%20RTT\7.4.png)

4. С помощью элемента `List of world Blueprints available to the user for editing or creation` открыть окно **Level Blueprint** путём нажатия на кнопку `Open Level Blueprint`.

>Далее рассматривается пример с учётом созданной ранее схемы  в **Level Blueprint** из раздела **Подготовка проекта Unreal Engine для работы с Carrot**

![7.5.](..\images\UnrealEngine\Создание%20RTT\7.5.jpg)

5. Из точки выхода **Begin Play Out** ноды **Carrot Масrо** проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

6. В появившемся окне **Executable actions** с помощью поисковой строки найти ноду `Carrot Reciever` и добавить её.

![7.6.](..\images\UnrealEngine\Создание%20RTT\7.6.jpg)

7. В параметре `Texture Render Targer 2D` ноды `Carrot Reciever` выбрать созданный **RTT** (**RTT_01**), **запустить** процесс компиляции с помощью кнопки `Compile`, **нажать** кнопку `🖫` (`Save`) и закрыть окно **Level Blueprint**.

![7.7.](..\images\UnrealEngine\Создание%20RTT\7.7.jpg)

8. Нажать на кнопку `Quickly add to the project`, перейти в раздел `Shapes` и добавить элемент `Plane (Плоскость)` напротив компонента **CarrotCamera**.

9. Открыть окно **Details** элемента `Plane` путём нажатия на него `левой кнопки мыши (ЛКМ)`, перейти в раздел `Materials` и параметру `Element 0` выбрать созданный **RTT** объект (**RTT_01**).



## Экспорт шаблона из проекта Unreal Engine

Экспорт шаблонов необходим для сохранения заготовленных проектов **Unreal Engine** в формате, позволяющему воспроизводить их Carrot Engine. Заготовленные шаблоны запускаются из Web Playlist (Carrot Dashboard).

>Перед экспортом шаблона необходимо запустить приложение `Carrot Server`.

Для экспорта шаблона из проекта **Unreal Engine** необходимо:

![8.1.](..\images\UnrealEngine\Экспорт%20Шаблона%20UE\8.1.jpg)

1. Нажать на кнопку **Export As Carrot Template**.

2. В открывшемся окне **Template Preview** нажать кнопку `🖫` (`Save`).

3. Откроется окно **Templates**, в котором необходимо присвоить имя экспортируемого шаблона в окне **Name** (в качестве примера, используется имя `MyProject`) и нажать на поле `Container`.

4. В открывшемся окне выбрать **схему Carrot Engine** для запуска шаблонов **Unreal Engine**, затем отметить необходимый контейнер из списка доступных и нажать кнопку `ОК`.

5. Нажать кнопку `Save Template` в окне **Templates**.



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



