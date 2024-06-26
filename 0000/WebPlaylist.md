# Web Playlist

В данном разделе можно ознакомиться с назначением, принципом работы и вазимодействия с Web Playlist.

## Назначение

**Web Playlist** - представляет из себя веб-интерфейс (**Carrot Dashboard**), предназначенный для управления контентом (запуск и его остановка), взаимодействия с графическими шаблонами и планированием (разграничением по времени) эфиров.

>Перед использованием **Web Playlist** необходимо убедиться в корректной работе других приложений Carrot (**Carrot Server** и **Web Playlist Server**), обеспечивающих его работоспособность.

## Функциональные возможности

К функциональным возможностям **Web Playlist** относится:

- создание и удаление плейлистов;
- загрузка медиа-информации (видео и изображения) для дальнейшего их использования;
- настройка графических шаблонов (присвоение переменным текстовой и медиа-информации);
- запуск и воспроизведение графических шаблонов;
- предпросмотр тектовой информации (титров) на элементах типа "бегущая строка";
- контроль производительности рабочей станции (Workstation).

## Общие сведения

Для доступа к веб-интерфейсу (**Carrot Dashboard**) необходимо:

1. Запустить браузер рабочей станции:

>Для корректной работы веб-интерфейса, рекомендуется использовать браузер **Google Chrome**

2. В адресную строку браузера ввести: `IP-address:Port`

>`IP-address` - IP-адрес рабочей станции, на которой развёрнут веб-интерфейс (**Carrot Dashboard**), в частности приложений поддерживающих его функционал (**Carrot Server** и **Web Playlist Server**).
>IP-адрес присваивается индивидуально и указывается в сопроводительной документации.
>В случае, если веб-интерфейс (**Carrot Dashboard**) развёрнут на локальной рабочей станции (Workstation), возможен ввод значения `localhost`, исключая необходимость поиска и ввода соответствующего IP-адреса.
>
>`Port` - порт рабочей станции (Workstation) присваиваемый индивидуально (указан в сопроводительной документации). По умолчанию, порту рабочей станции присвоено значение `8088`.

![WP_Auth_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Аутентификации%20Carrot%20Dashboard.png)

3. Ввести логин и пароль от учётной записи **Carrot Dashboard** и нажать кнопку **Log In**.

![WP_Main_Window](..\images\Web%20Playlist\Внешний%20Вид%20Основного%20Окна%20Web%20Playlist.png)

После аутентификации в **Carrot Dashboard**, откроется его окно, состоящее из следующих элементов:

- Окно пользователя (1);
- Окно "Playlist" (2);
- Окно "Editor" (3);
- Окно "Browser" (4);
- Окно "Settings" (5).

### 1. Окно пользователя

**Окно пользователя** предназначено для отображения идентификационных данных о нём. 

![WP_User_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Пользователя.png)

После нажатия и раскрытия **окна пользователя**, функционально, его можно можно разделить на следующие компоненты:

- Окно идентификационных данных (1);
- Кнопка "Выход" (2).

**1.1. Окно идентификационных данных**

**Окно идентификационных данных** предназначено для отображения имени пользователя и его пользовательской **группы**.

>Принадлежность пользователя к одной из **групп** определяет перечень доступных ему функциональных возможностей для взаимодействия с веб-интерфейсом (**Carrot Dashboard**). Основным примером, реализуемым с помощью пользовательской **группы** является разграничение уровня доступа по выдаче графики в эфир.

**1.2. Кнопка "Выход"**

**Кнопка "Выход"** предназначена для смены пользователя, при нажатии на которую, производится выход из меню веб-интерфейса (**Carrot Dashboard**) и переход к окну аутентификации пользователя.

### 2. Окно "Playlist"

![WP_Playlist_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Playlist.png)

**Окно "Playlist"** состоит из следующих элементов:

- область функциональных элементов (1);
- информационная область (2);
- область взаимодействия c плейлистом (3).

**2.1. Область функциональных элементов**

![WP_Playlist_Elements_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Функциональных%20Элементов%20Окна%20Playlist.png)

**Область функциональных элементов** предназначена для взаимодействия с плейлистом, состав элементов которой изложен в таблице:

|Наименование кнопки|Назначение|
|-------------------|----------|
|`Load (1)`|Загрузка выбранного события в плейлист.|
|`Load all (2)`|Загрузка всех событий в плейлист.|
|`IN (3)`|Загрузка и воспроизведение выбранного события в плейлисте.|
|`Next (4)`|Остановка выбранного события и воспроизведение следующего за ним.|
|`OUT (5)`|Остановка выбранного события.|
|`Unload (6)`|Выгрузка выбранного события из плейлиста.|
|`Unload all (7)`|Выгрузка всех событий из плейлиста.|
|`Panic (8)`|.|

**2.2. Информационная область**

![WP_Playlist_Information_Window](..\images\Web%20Playlist\Внешний%20Вид%20Информационной%20Области%20Окна%20Playlist.png)

**Информационная область** предназначена для отображения имени открытого плейлиста и его располагаемой директории (пути). Структурно, **информационная область** состоит из следующих компонентнов:

- кнопка доступа к базе данных плейлистов (1);
- директория (путь) открытого плейлиста (2).

**2.2.1. Кнопка доступа к базе данных плейлистов**

**Кнопка доступа к базе данных плейлистов** предназначена для открытия в **окне "Playlist"** содержащихся в ней элементов (плейлистов). 

![WP_Existing_Playlist_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Открытия%20Готового%20Плейлиста.png)

После нажатия **кнопки доступа к базе данных плейлистов** отображается **окно открытия готового плейлиста**, состоящее из следующих элементов:

- Сортировка плейлистов (1);

>Сортировка плейлистов возможна по следующим способам:
>- в порядке возрастания буквенного алфавита;
>- в порядке убывания буквенного алфавита;
>- в порядке возрастания от даты создания плейлиста;
>- в порядке убывания от даты создания плейлиста.

- Окно отображения имени плейлиста и его даты создания (2);
- Поле отображения недавно открытых плейлистов (3)
- Поле ввода имени создаваемого плейлиста (4);
- Кнопка "Open" для создания плейлиста (5);
- Кнопка "Cancel" для отмены процедуры создания плейлиста (6).

Для открытия уже готового плейлиста, необходимо в **окне отображения имени плейлиста и его даты создания** или в **поле отображения недавно открытых плейлистов** выбрать необходимый и нажать **кнопку "Open"**.

**2.2.2. Директория (путь) открытого плейлиста**

Область **"директория (путь) открытого плейлиста"** предназначена для отображения имени плейлиста и его директори (пути).

**2.3. Область взаимодействия c плейлистом**

![WP_Playlist_Usage_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Взаимодействия%20с%20Плейлистом%20Окна%20Playlist.png)

**Область взаимодействия c плейлистом** предназначена для отображения общей и сводной информации об используемых ивентах (AE шаблоны, текстовых комманд и пр.) в плейлисте. Структурно, **область взаимодействия c плейлистом** включает в себя следующие элементы:

- область отображения общей информации об ивентах (1);
- область отображения сводной информации о выбранном ивенте (2).

**2.3.1. Область отображения общей информации об ивентах**

![WP_Playlist_Usage_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Взаимодействия%20с%20Плейлистом%20Окна%20Playlist.png)

**Область отображения общей информации об ивентах** содержит следующие классифицируемые данные представленные в таблице:

|Тип отображаемой информации|Назначение|
|-------------------|----------|
|`Name`|Отображение имени ивента.|
|`Comment`|Отображение справочной информации об ивенте (комментарий).|
|`Template name`|Отображение имени шаблона.|
|`Status`|Отображение информации о состоянии ивента.|

>Каждый ивент может находиться в следующих состояниях:
>
> <span style="color:gray">Unloaded</span> - ивент не загружен в плейлист;
>
> <span style="color:orange">Loading</span> - загрузка ивента в плейлист;
>
> <span style="color:purple">Ready</span> - ивент загружен и готов к запуску;
>
> <span style="color:green">Active</span> - ивент запущен.

|||
|-------------------|----------|
|`Content`|.|
|`Id`|Уникальный идентификатор ивента. По умолчанию отображение параметра отключено.|
|`External Id`|Внешний уникальный идентификатор ивента. По умолчанию отображение параметра отключено.|
|`Current State`|.По умолчанию отображение параметра отключено.|

### 3. Окно "Editor"

**Окно "Editor"** предназначено для создания и редактирования плейлистов.

![WP_Editor_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Editor.png)

**Окно "Editor"** состоит из следующих кнопок:

- Кнопка "New Playlist" (1);
- Кнопка "Open Playlist" (2);
- Область отображения плейлистов (3).

**3.1. Кнопка "New Playlist"**

**Кнопка "New Playlist"** предназначена для создания плейлистов.

После взаимодействия с **кнопкой "New Playlist"** открывается **окно создания пустого плейлиста**, состоящее из следующих элементов:

![WP_Empty_Playlist_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Создания%20Пустого%20Плейлиста.png)

- Сортировка плейлистов (1);

>Сортировка плейлистов возможна по следующим способам:
>- в порядке возрастания буквенного алфавита;
>- в порядке убывания буквенного алфавита;
>- в порядке возрастания от даты создания плейлиста;
>- в порядке убывания от даты создания плейлиста.

- Окно отображения имени плейлиста и его даты создания (2);
- Поле ввода имени создаваемого плейлиста (3);
- Кнопка "ОК" для создания плейлиста (4);
- Кнопка "Cancel" для отмены процедуры создания плейлиста (5).

Для создания плейлиста, необходимо в **поле ввода имени создаваемого плейлиста** ввести необходимое наименование и нажать **кнопку "ОК"**.

**3.2. Кнопка "Open Playlist"**

**Кнопка "Open Playlist"** предназначена для открытия готовых плейлистов.

После взаимодействия с кнопкой **"Open Playlist"** отобразится **окно открытия готового плейлиста**, описание которого изложено в п. 2.2.1.

**3.3. Область отображения плейлистов**

В случае создания плейлиста (с помощью **кнопки "New Playlist"**), в **области отображения плейлистов**, откроется его наименование с возможностью редактирования.

![WP_View_Playlist_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Отображения%20Плейлистов.png)

В таком случае, **область отображения плейлистов** будет иметь следующий вид и состоять из элементов:

- область свойств плейлиста (1);
- область управления плейлистом (2).

**3.3.1. Область свойств плейлиста**

**Область свойств плейлиста** состоит из 3-х структур:

- кнопка "Expand Stories" (1). Предназначена для раворачивания содержимого созданных **историй**;

>Создаваемая **история** представляет из себя папку, предназначенную для разграничения информации и удобстве работы с шаблонами.

- кнопка "Collapse Stories" (2). Предназначена для сворачивания содержимого созданных историй;
- меню кнопок (3). Содержит кнопки взаимодействия с плейлистом.

>**Меню кнопок** содержит кнопки со следующим функционалом
>
>|Наименование кнопки|Назначение|
>|-------------------|----------|
>|`Add Story`|Создание пустой истории.|
>|`Group Events`|Группировка выбранных шаблонов.|
>|`Ungroup Events`|Разгруппировка выбранных шаблонов. Появляется в случае выбора уже состоящих в одной группе шаблонов.|
>|`Rename Story`|Переименование выбранной истории.|
>|`Remove event(s)`|Удаление выбранного(ых) шаблона(ов).|
>|`Remove story`|Удаление выбранной истории.|
>|`Duplicate event(s)`|Дублирование выбранного(ых) шаблона(ов).|
>|`Add Special Event`|Добавление специального события `Text Command`.|
>>`Text Command` представлет из себя текстовую команду, которая напрямую передаётся в **Carrot Engine**. Список текстовых команд:
>>|Наименование текстовой команды|Назначение|
>>|-------------------|----------|
>>|`ApplySettingsToContent`|.|
>>|`RestartContent`|.|
>>|`TakeOutContainer`|.|
>>|`SetGlobalVar`|.|

**3.3.2. Область взаимодействия с плейлистом**

**Область взаимодействия с плейлистом** состоит из 3-х элементов:

- Template Manаger (1). Предназначен для отображения доступных для работы AE шаблонов;

>AE шаблоны, отображаемые во вкладке Template Manager, непосредственно экспортруются из базы данных при её инициализации.

- Event Manager (2). Предназначен для отображения всех доступных событий;
- Event Propeties (3). Предназначен для отображения свойств выбранного ивента и настройки его параметров.

>Стоит учитывать, что каждый отдельный ивент состоит из определённых функциональных возможностей с индивидуальным набором параметров.

### 4. Окно "Browser"

![WP_Browser_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Browser.png)

**Окно "Browser"** состоит из следующих элементов:

- область функциональных элементов (1);
- область взаимодействия с медиа-информацией (2).

**4.1. Область функциональных элементов**

![WP_Browser_Usage_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Функциональных%20Элементов%20Окна%20Browser.png)

**Область функицональных элементов** состоит из следующих кнопок, представленных в таблице:

|Наименование кнопки|Назначение|
|-------------------|----------|
|`Add Playlist / Add Media (1)`|Добавление или создание нового плейлиста / медиа.|
|`Copy (2)`|Копирование выбранного элемента.|
|`Paste (3)`|Вставка скопированного элемента. Активируется после копирования элемента.|
|`Duplicate (4)`|Дублирование выбранного элемента.|
|`Cut (5)`|"Вырезать" выбранный элемент.|
|`Rename (6)`|Переименование выбранного элемента.|
|`Delete (7)`|Удаление выбранного элемента.|

### 5. Окно "Settings"

**Окно "Settings"** предназначено для настройки параметров отображения, включения вспомогательного функционала в веб-интерфейсе (**Carrot Dashboard**), в том числе настройки "горячих клавиш".

![WP_Settings_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Global%20Settings%20окна%20Settings.png)

**Окно "Settings"** структурно состоит из следующих окон:

- Global settings (1);
- Experimental settings (2);
- Hotkeys (3).

**5.1. Global settings**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Clear expanded Scenarios`|Сброс состояния для всех используемых сценариев. Применимо в случае проблем с производительностью.|
|`Show tooltips`|Включение поясняющих сообщений (подсказок) в веб-интерфейсе (**Carrot Dashboard**).|
|`Enable force Load`|Включение режима принудетельной загрузки ассетов эвента с Carrot Server на Carrot Engine пока подгружается эвент.|
|`Sync Event name`|Включение режима, при котором значение текстовой переменной изменяется совместно с именем ивента. Функционал параметра возможен только в том случае, когда эвент имеет только одну переменную текстового типа.|
|`Always show Event states`|Включение режима, при котором отображается состояние события с двойным состоянием.|
|`Enable Scenario Only mode`|Включение режима применения функционала кнопок к текущей выбранной "истории".|
|`Send non-saved active Event changes to Engine`|Включение режима, при котором любой изменяемый параметр активного эвента будет применён и отправлен в Carrot Engine (работоспособен в случае установленной настройки **AllowRuntimeChange**). Применимо в случае работы с 3D-графикой.|
|`Show preview player`|Включение предварительного просмотра событий во вкладке свойств эвента на странице "Editor".|

**5.2. Experimental settings**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Enable System Monitor Page`|Включение режима отображения страницы System Monitor.|
|`Show text variable line numbers`|Включение режима отображения номера строк для многострочных текстовых переменных во вкладке свойств эвента на странице "Editor". Стабильная работа прослеживается в случае наличия меньшего количества строк.|

**5.3. Hotkeys**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Load Event`|Загрузка эвента. По умолчанию клавиша **"L"**.|
|`Load All Events`|Закрузка всех эвентов. По умолчанию сочитание клавиш **"Shift + L"**.|
|`Unload Event`|Выгрузка эвента. По умолчанию клавиша **"U"**.|
|`Unload All Events`|Выгрузка всех эвентов. По умолчанию сочитание клавиш **"Shift + U"**.|
|`Take In Current Event`|Запуск текущего эвента. По умолчанию сочитание клавиш **"Ctrl + Space"**.|
|`Take Out Current Event`|Оставновка текущего эвента. По умолчанию сочитание клавиш **"Shift + Space"**.|
|`Take In Take Out Current Event`|Запуск/остановка текущего эвента. По умолчанию клавиша **"Space"**.|
|`Take In Next Event`|Запуск следующего эвента. По умолчанию клавиша **"Enter"**.|




