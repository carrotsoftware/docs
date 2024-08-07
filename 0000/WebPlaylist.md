# Web Playlist

В данном разделе можно ознакомиться с назначением, принципом работы и взаимодействия с Web Playlist.

## Назначение

**Web Playlist** - представляет из себя веб-интерфейс (**Carrot Dashboard**), предназначенный для управления контентом (запуск и его остановка), взаимодействия с графическими шаблонами и планированием (разграничением по времени) эфиров.

>Перед использованием **Web Playlist** необходимо убедиться в корректной работе других приложений Carrot (**Carrot Server** и **Web Playlist Server**), обеспечивающих его работоспособность.

## Функциональные возможности

К основным функциональным возможностям **Web Playlist** относится:

- создание и удаление плейлистов;
- загрузка медиа-информации (видео и изображения) для дальнейшего их использования;
- настройка ивентов (присвоение переменным текстовой и медиа-информации);
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
|`Load (1)`|Загрузка выбранного ивента в плейлист.|
|`Load all (2)`|Загрузка всех ивентов в плейлист.|
|`IN (3)`|Воспроизведение выбранного ивента в плейлисте.|
|`Next (4)`|Остановка выбранного ивента и воспроизведение следующего за ним.|
|`OUT (5)`|Остановка выбранного ивента.|
|`Unload (6)`|Выгрузка выбранного ивента из плейлиста.|
|`Unload all (7)`|Выгрузка всех ивентов из плейлиста.|
|`Panic (8)`|Принудительная остановка запущенных ивентов в плейлисте.|

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
>- в порядке возрастания по первой буквы имени плейлиста;
>- в порядке убывания по первой буквы имени плейлиста;
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

**Область взаимодействия c плейлистом** предназначена для отображения общей и сводной информации об используемых ивентах в плейлисте. Структурно, **область взаимодействия c плейлистом** включает в себя следующие элементы:

- область отображения общей информации об ивентах (1);
- область отображения сводной информации о выбранном ивенте (2).

**2.3.1. Область отображения общей информации об ивентах**

![WP_Playlist_Usage_Window](..\images\Web%20Playlist\Классифицируемые%20Данные%20Области%20Отображения%20Общей%20Информации%20об%20Ивентах.png)

**Область отображения общей информации об ивентах** содержит следующие классифицируемые данные представленные в таблице:

|Тип отображаемой информации|Назначение|
|-------------------|----------|
|`Name`|Отображение имени ивента.|
|`Comment`|Отображение справочной информации об ивенте (комментарий).|
|`Template name`|Отображение имени шаблона.|
|`Status`|Отображение информации о **Status** ивента.|

>Каждый ивент может находиться в следующих состояниях **Status**:
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
|`Content`|Отображение имени "контейнера", к которому привязан ивент.|
|`Id`|Уникальный идентификатор ивента. По умолчанию отображение параметра отключено.|
|`External Id`|Внешний уникальный идентификатор ивента. По умолчанию отображение параметра отключено.|

>**Внешний уникальный идентификатор ивента** предназначен для поддержки программного взаимодействия между "playout системами".

|||
|-------------------|----------|
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
>- в порядке возрастания по первой букве имени плейлиста;
>- в порядке убывания по первой букве имени плейлиста;
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

В случае создания плейлиста (с помощью **кнопки "New Playlist"**) или его открытия (с помощью **кнопки "Open Playlist"**), будет доступна **область отображения плейлистов**.

![WP_View_Playlist_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Отображения%20Плейлистов.png)

**Область отображения плейлистов** состоит из следующих элементов:

- область свойств плейлиста (1);
- область управления плейлистом (2).

**3.3.1. Область свойств плейлиста**

![WP_Playlist_Properties](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Свойств%20Плейлиста.png)

**Область свойств плейлиста** состоит из 3-х структур:

- **кнопка "Expand Stories"** (1). Предназначена для отображения содержимого **историй**;

>Создаваемая **история** представляет из себя папку, предназначенную для разграничения информации и удобстве работы с ивентами.

- **кнопка "Collapse Stories"** (2). Предназначена для скрытия содержимого историй;
- **меню кнопок** (3). Содержит кнопки взаимодействия с плейлистом.

>После нажатия на **меню кнопок** отобразятся следующие функциональные элементы, представленным в таблице.
>
>|Наименование функционального элемента|Назначение|
>|-------------------|----------|
>|`Add Story`|Создание пустой истории.|
>|`Group Events`|Группировка выбранных ивентов.|
>|`Ungroup Events`|Разгруппировка выбранных ивентов. Появляется в случае выбора уже состоящих в одной группе ивентов.|
>|`Rename Story`|Переименование выбранной истории.|
>|`Remove event(s)`|Удаление выбранного(ых) ивента(ов).|
>|`Remove story`|Удаление выбранной истории.|
>|`Duplicate event(s)`|Дублирование выбранного(ых) ивента(ов).|
>|`Add Special Event`|Добавление специального ивента `Text Command`.|
>>`Text Command` представлет из себя текстовую команду, которая напрямую передаётся в **Carrot Engine**. Список текстовых команд:
>>
>>|Наименование текстовой команды|Назначение|Формат текстовой команды|Пример|
>>|-------------------|----------|----------|----------|
>>|`ApplySettingsToContent`|Применение настроек к контенту типа Keyer (используется в Carrot Flowchart) с помощью заготовленного файла .xml|%Command=[ApplySettingsToContent] %ContentName=[Наименование контента в схеме] %SettingsPath=[Директория файла формата .xml] %SaveSettingsToDB=[True/False]|%Command=[ApplySettingsToContent] %ContentName=[Keyer] %SettingsPath=[D:\KeyerSettings\key_test_14-01-22.xml] %SaveSettingsToDB=[True]|
>>>
>>>В случае, если параметр `SaveSettingsToDB` принимает значение `True`, то настройки сохраняются в базе данных, что позволяет их применять при следующих запусках.
>>>
>>|||||
>>|-------------------|----------|----------|----------|
>>|`RestartContent`|Перезапуск контента "бегущая строка" типа Ticker (используется в Carrot Flowchart).|%Command=[RestartContent] %ContentName=[Наименование контента в схеме]|%Command=[RestartContent] %ContentName=[Ticker]|
>>|`TakeOutContainer`|Вызов `TakeOut` (прекращение работы с анимацией выхода) у шаблонов привязанных к индивидуальному контейнеру (используется в Carrot Flowchart).|%Command=[TakeOutContainer] %ContainerName=[Наименование контейнера в схеме Carrot Flowchart]|%Command=[TakeOutContainer] %ContainerName=[AE_2D]|
>>|`SetGlobalVar`|Изменение глобальной переменной привязанной к шаблону.|%Command=[SetGlobalVar] %GlobalVarName=[Наименование глобальной переменной] %GlobalVarValue=[Изменяемое значение переменной]|%Command=[SetGlobalVar] %GlobalVarName=[title] %GlobalVarValue=[Заголовок]|
>>|`OSC`|Отправка команд по протоколу Open Sound Control.|%Command=[OSC] %Address=[Директория отправки команды] %ArgumentType=[s] %ArgumentValue=[Строковое значение] %ArgumentType=[i] %ArgumentValue=[Целочисленное значение] %ArgumentType=[f] %ArgumentValue=[Вещественное значение]|%Command=[OSC] %Address=[/hog/playback/go/0/72] %ArgumentType=[s] %ArgumentValue=[stroka4] %ArgumentType=[i] %ArgumentValue=[102] %ArgumentType=[f] %ArgumentValue=[104,7]|
>>|`vMix`|Отправка команд по протоколу vMix.|%Command=[vMix] %ArgumentType=[Наименование функции] %ArgumentValue=[Значение параметра] %ArgumentType=[Наименование параметра] %ArgumentValue=[Значение параметра]|%Command=[vMix] %ArgumentType=[Function] %ArgumentValue=[Fade] %ArgumentType=[Duration] %ArgumentValue=[1000]|
>>>
>>>Ознакомиться с перечнем используемых параметров протокола **vMix**, в том числе присваиваемых к ним значениям можно в соответствии с предоставляемой на него [документацией](https://www.vmix.com/help21/index.htm?ShortcutFunctionReference.html).
>>>
>>|||||
>>|-------------------|----------|----------|----------|
>>|`StopPlaylist`|Принудительная остановка проигрываемого плейлиста.|%Command=[StopPlaylist] %Playlists=[Внешний ID плейлиста(ов)]|%Command=[StopPlaylist] %Playlists=[fbd7a92e-cc6e-4eae-b36d-0078ff954260, 1f09f006-7989-4577-b526-6a62da6e8b4e]|
>>>
>>>Функционал работы тектовой команды **StopPlaylist** аналогичен функционалу работы **кнопки "Panic"**, представленной в п. 2.1.
>>>
>>|||||
>>|-------------------|----------|----------|----------|
>>|`Reset`|Перезапуск схем(ы) Carrot Engine по внешнему ID.|%Command=[Reset] %Engines=[Внешний ID схем(ы) Carrot Engine]|%Command=[Reset] %Engines=[Education_1, Education_2]|
>>>
>>>**Внешний ID схемы Carrot Engine** присваивается в соответствующем окне приложения **System Monitor**.
>>>
>>>В случае, если **не указан** внешний ID схем(ы) Carrot Engine, то исполнение команды задействуется на всех запущенных **Carrot Engine**. 
>>>
>>|||||
>>|-------------------|----------|----------|----------|
>>|`Movicom`|Отправка команд по протоколу Movicom. Поддерживается два типа команд: `Запрос статуса` и `Запуск пресета`|`Запрос статуса:` %Command=[Movicom] %Type=[GetStatus]. `Запуск пресета:` %Command=[Movicom] %Type=[SetPreset] %RunState=[Run (Запуск) или Stop (Остановка)] %PresetType=[Position (выход в точку) или Path (Траектория)] %PresetNum=[Указание номера пресета (до 65535)]|`Запрос статуса:` %Command=[Movicom] %Type=[GetStatus]. `Запуск пресета:` %Command=[Movicom] %Type=[SetPreset] %RunState=[Run] %PresetType=[Position] %PresetNum=[23]|


**3.3.2. Область взаимодействия с плейлистом**

![WP_Interaction_Playlist_Editor](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Взаимодействия%20с%20Плейлистом%20Окна%20Editor.png)

**Область взаимодействия с плейлистом** состоит из 3-х элементов:

- Template Manаger (1). Предназначен для отображения доступных шаблонов с которыми возможна работа;

>Шаблоны, отображаемые во вкладке Template Manager, непосредственно экспортруются из базы данных при её инициализации.

- Event Manager (2). Предназначен для отображения всех доступных ивентов;
- Event Propeties (3). Предназначен для отображения свойств выбранного ивента и настройки его параметров.

>Стоит учитывать, что каждый отдельный ивент содержит определённые функциональные возможности с индивидуальным набором параметров.

**3.3.2.1. Template Manager**

![WP_TM_Editor](..\images\Web%20Playlist\Окно%20Взаимодействия%20с%20Template%20Manager%20во%20Вкладке%20Editor.png)

**Template Manager** состоит из следующих компонентов:

- строка поиска (1);
- менеджер шаблонов (2).

**Строка поиска** позволяет найти необходимый шаблон по имени для дальнейшей работы с ним, в том числе по пометке **"Избранные"**.

**Менеджер шаблонов** содержит перечень шаблонов хранящихся в базе данных. 

>В **менеджере шаблонов** реализована возможность пометки шаблона в качестве "Избранного".

**3.3.2.2. Event Manager**

![WP_EM_Editor](..\images\Web%20Playlist\Окно%20Взаимодействия%20с%20Event%20Manager%20во%20Вкладке%20Editor.png)

**Event Manager** состоит из следующих компонентов:

- область поиска (1);
- менеджер ивентов (2).

**Область поиска** предназначена для поиска по имени необходимых плейлистов и ивентов с помощью соответствующих окон.

**Менеджер ивентов** представляет из себя единую систему хранения и взаимодействия с ивентами (**Global Event Pool**).

**Global Event Pool** содержит все доступные для работы ивенты с сохранением их принадлежности по плейлистам, что также позволяет заимствовать уже готовые ивенты при создании нового. 

![WP_GlobalEventPool](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Global%20Event%20Pool.png)

**Global Event Pool** состоит из следующих элементов:

- кнопка `Remove Event(s)` (1);
- кнопка `Unload Event(s)` (2);
- область отображения общей информации (3);

|Отображаемая информации|Назначение|
|-------------------|----------|
|`Event Name`|Отображение имени ивента.|
|`Event status`|Отображение информации о **Status** ивента.|
|`Template Name`|Отображение имени шаблона.|
|`Last modified`|Отображение даты последней редакции.|

- кнопка `Get all Events From DB` / `Get events modified within last 2 weeks` (4).

>Кнопка `Get all Events From DB` предназначена для загрузки всех ивентов из базы данных.
>Кнопка `Get events modified within last 2 weeks` предназначена для загрузки отредактированных ивентов в течение последних 2-х недель.
>Смена кнопок между `Get all Events From DB` и `Get events modified within last 2 weeks` происходит после взаимодействия с ними.

**3.3.2.3. Event Properties**

![WP_EP_Editor](..\images\Web%20Playlist\Окно%20Взаимодействия%20с%20Event%20Properties%20во%20Вкладке%20Editor.png)

**Event Properties** состоит из следующих областей:

- строка поиска (1);
- свойства ивента (2).

**Строка поиска** предназначена для поиска параметра по имени переменной.

Область **"свойства ивента"** предназначена для отображения и настройки свойств ивента. В общем случае, данная область, содержит следующие редактируемые поля, представленные в таблице.

|Редактируемое поле|Назначение|
|-------------------|----------|
|`Event Name`|Присвоение имени ивенту.|
|`External ID`|Присвоение внешнего уникального идентификатора ивенту.|
|`Allow Runtime Change`|Включение режима редактирования переменных при запущенном ивенте.|
|`Text Command`|Присвоение текстовых данных ивенту.|
|`Comment`|Написание справочной информации об ивенте (комментарий).|

### 4. Окно "Browser"

![WP_Browser_Window](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Browser.png)

**Окно "Browser"** представляет из себя базу данных, состоящую из следующих элементов:

- область функциональных элементов (1);
- область взаимодействия с объектами (2).

**4.1. Область функциональных элементов**

![WP_Browser_Usage_Window](..\images\Web%20Playlist\Внешний%20Вид%20Области%20Функциональных%20Элементов%20Окна%20Browser.png)

**Область функциональных элементов** состоит из следующих кнопок, представленных в таблице:

|Наименование кнопки|Назначение|
|-------------------|----------|
|`Add Playlist / Add Media (1)`|Добавление или создание нового плейлиста / медиа.|
|`Copy (2)`|Копирование выбранного элемента.|
|`Paste (3)`|Вставка скопированного элемента. Активируется после копирования элемента.|
|`Duplicate (4)`|Дублирование выбранного элемента.|
|`Cut (5)`|"Вырезать" выбранный элемент.|
|`Rename (6)`|Переименование выбранного элемента.|
|`Delete (7)`|Удаление выбранного элемента.|

**4.2. Область взаимодействия с медиа**

**Область взаимодействия с объектами** предназначена для отображения находящихся в базе данных элементов о медиа, шаблонах и плейлистах, содержая соответствующие окна, а именно:

- Media;
- Templates;
- Playlists.

**4.2.1. Окно Media**

![WP_Media_Editor](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Media%20во%20Вкладке%20Browser.png)

**Окно Media** содержит следующие классифицируемые данные представленные в таблице:

|Тип отображаемой информации|Назначение|
|-------------------|----------|
|`Item Name`|Отображение имени медиа.|
|`External ID`|Присвоение внешнего уникального идентификатора медиа.|

**4.2.2. Окно Templates**

![WP_Templates_Editor](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Templates%20во%20Вкладке%20Browser.png)

**Окно Templates** содержит следующие классифицируемые данные представленные в таблице:

|Тип отображаемой информации|Назначение|
|-------------------|----------|
|`Item Name`|Отображение имени шаблона.|
|`Content`|Отображение имени "контейнера", к которому привязан шаблон.|
|`External ID`|Присвоение внешнего уникального идентификатора шаблона.|
|`Date created`|Отображение информации о дате создания шаблона.|

>В **окне Templates** доступна сортировка шаблонов по следующим параметрам:
>- в порядке возрастания по первой букве имени шаблона;
>- в порядке убывания по первой букве имени шаблона;
>- в порядке возрастания от даты создания шаблона;
>- в порядке убывания от даты создания шаблона.

**4.2.3. Окно Playlists**

![WP_Playlists_Editor](..\images\Web%20Playlist\Внешний%20Вид%20Окна%20Playlists%20во%20Вкладке%20Browser.png)

**Окно Playlists** содержит следующие классифицируемые данные представленные в таблице:

|Тип отображаемой информации|Назначение|
|-------------------|----------|
|`Item Name`|Отображение имени плейлиста.|
|`External ID`|Присвоение внешнего уникального идентификатора плейлиста.|
|`Date created`|Отображение информации о дате создания плейлиста.|

>В **окне Playlists** доступна сортировка шаблонов по следующим параметрам:
>- в порядке возрастания по первой букве имени плейлиста;
>- в порядке убывания по первой букве имени плейлиста;
>- в порядке возрастания от даты создания плейлиста;
>- в порядке убывания от даты создания плейлиста.


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
|`Clear expanded Scenarios`|Сброс состояния для всех используемых историй. Применимо в случае проблем с производительностью.|
|`Show tooltips`|Включение поясняющих сообщений (подсказок) в веб-интерфейсе (**Carrot Dashboard**).|
|`Enable force Load`|Включение режима принудетельной загрузки ассетов ивента с Carrot Server на Carrot Engine пока подгружается ивент.|
|`Sync Event name`|Включение режима, при котором значение текстовой переменной изменяется совместно с именем ивента. Функционал параметра возможен только в том случае, когда ивент имеет только одну переменную текстового типа.|
|`Always show Event states`|Включение режима, при котором отображается состояние события с двойным состоянием.|
|`Enable Scenario Only mode`|Включение режима применения функционала кнопок к текущей выбранной "истории".|
|`Send non-saved active Event changes to Engine`|Включение режима, при котором любой изменяемый параметр активного ивента будет применён и отправлен в Carrot Engine (работоспособен в случае установленной настройки **AllowRuntimeChange**). Применимо в случае работы с 3D-графикой.|
|`Show preview player`|Включение предварительного просмотра событий во вкладке свойств ивента на странице "Editor".|

**5.2. Experimental settings**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Enable System Monitor Page`|Включение режима отображения страницы System Monitor.|
|`Show text variable line numbers`|Включение режима отображения номера строк для многострочных текстовых переменных во вкладке свойств ивента на странице "Editor". Стабильная работа прослеживается в случае наличия меньшего количества строк.|

**5.3. Hotkeys**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Load Event`|Загрузка ивента. По умолчанию клавиша **"L"**.|
|`Load All Events`|Закрузка всех ивента. По умолчанию сочитание клавиш **"Shift + L"**.|
|`Unload Event`|Выгрузка ивента. По умолчанию клавиша **"U"**.|
|`Unload All Events`|Выгрузка всех ивентов. По умолчанию сочитание клавиш **"Shift + U"**.|
|`Take In Current Event`|Запуск текущего ивента. По умолчанию сочитание клавиш **"Ctrl + Space"**.|
|`Take Out Current Event`|Оставновка текущего ивента. По умолчанию сочитание клавиш **"Shift + Space"**.|
|`Take In Take Out Current Event`|Запуск/остановка текущего ивента. По умолчанию клавиша **"Space"**.|
|`Take In Next Event`|Запуск следующего ивента. По умолчанию клавиша **"Enter"**.|




