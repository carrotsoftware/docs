# Carrot Server

В данном разделе можно ознакомиться с назначением, приципом работы и взаимодействием с приложением **Carrot Server**.

---

## Назначение 

**Carrot Server** предназначен для обеспечения взаимодействия между приложениями **Carrot**, хранения медия и базы данных.

>*В случае, если **Carrot Server** не запущен, то работа других приложений (основных и дополнительных) **невозможна**.*

---

## Функциональные возможности

К функциональным возможностям приложения **Carrot Server** относится:
- хранение медиа и базы данных;
- обеспечение взаимодействия между приложениями Carrot;
- формирование списка подключений.

---

## Общие сведения

![Carrot_Server_Main_Window](..\images\CarrotServer\Carrot%20Server%20Main%20Window.png)

Интерфейс программного модуля **Carrot Server** состоит из следующих элементов:
- File (1);
- Tools (2);
- Help (3);
- Основное рабочее пространство (4);
- Статус бар (5).

---

### **1. Раздел "File"**

Элемент **File** cодержит следующие кнопки:

|Наименование кнопки|Назначение|
|-------------------|----------|
|`Settings`|Окно настройки параметров Carrot Server.|
|`Exit`|Завершение работы Carrot Server.|

**1.1. Окно Settings**

**1.1.1. Раздел Common**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Server Name`|Присвоение персонального имени рабочей станции, на которой запущен **Carrot Server**. Целью данного параметра является определение имени рабочей станции в случае, если произошла нештатная ситуация (прекращение работы, некорректная работа и т.п.).| 

>Имя рабочей станции непосредственно задействуется в приложении **System Monitor**.

**1.1.2. Раздел Data Base**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Directory`|Указание Carrot Server директории (пути) к базе данных.|

>В **базе данных** содержится основные файлы (AE шаблоны, .xml и .xlsx файлы и пр.), необходимые для работы **Carrot** в целом.

|||
|-------------------|----------|
|`Backup Directory`|Указание Carrot Server директории (пути) к резервной копии базы данных. Применимо в случаях обновления базы данных.|
|`Unique Event names`|Включение режима проверки на уникальность имени эвента в базе данных.|
|`Windows Restricted Chars`|Включение режима проверки имён эвентов и шаблонов на запрещённые символы Windows.|
|`Skylark Integration`|Включение режима проверки уникальности имени ивента в базе данных **Skylark** и **Carrot**.|

>Включённый функционал параметров `Unique Event names`, `Windows Restricted Chars` и `Skylark Integration` является основным условием для программного взаимодействия с playout системой **Skylark**.
>**Skylark** представляет из себя сторонний программный комплекс, осуществляющий автоматическое транслирование медиа при взаимодействии с **Carrot**.

|||
|-------------------|----------|
|`Check Authorization And Roles`|Включение режима проверки авторизированной учётной записи на доступные ей функциональные возможности **Carrot**.|
|`Check user channels`|Включение режима разграничения уровня доступа учётных записей к объектам базы данных.|

**1.1.3. Раздел Digital Assets**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Directory`|Указание директории (пути) к папке, в которую будут сохраняться все медиа файлы.|
|`Copy Assets`|Включение режима передачи ассетов на **Carrot Server**. В случае если параметр выключен, то в момент создания ассета указывается только директория (путь) до самого файла, таким образом, повышается производительность (отключается передача на **Carrot Server** и **Carrot Engine**) в случае использования файлов большого объёма.|

**1.1.4. Раздел GPIO**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Keep UE Event Active Status`|Вызов одного и того же стейта при воспроизведения события из плейлиста.| 

**1.1.5. Раздел III Protocol Commands**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Use STOP`|Включение режима логики работы (воспроизведения медиа) playout системы **Dalet**. В случае отключения данного параметра, взаимодействие с **Dalet** происходит при помощи протокола III, позволяющего воспроизводить в последовательном режиме шаблоны (игнорируя внутреннюю команду STOP **Dalet**) без их обязательной остановки.|

**1.1.6. Раздел License**

|Наименование параметра|Назначение|
|-------------------|----------|
|`License Key`|Ввод лицензионного ключа Carrot.|

>Лицензионный ключ необходим для доступа к функционалу работы **Carrot**. В случае отсутствия лицензионного ключа, функционал работы будет ограничен.

**1.1.7. Раздел Miscellaneous**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Hide to Tray`|Включение режима, в котором при нажатии на закрытие окна (иконка "Крестик" используемая по умолчанию в стандартном окне Windows) происходит его скрытие в системную область уведомлений (панель управления).|

**1.1.8. Раздел Replication**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Replication Hosts`|Указание IP-адресов **Carrot Server** задействованных в репликации (синхронизации) данных.|

>В **Replication Hosts** первый IP-адрес **Carrot Server** является основным (мастером).

|||
|-------------------|----------|
|`Local IP for Replication`|Указание локального IP-адреса **Carrot Server** в котором для репликации (синхронизации) данных.|

**1.1.9. Раздел Resource Manager**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Use Preloading`|Включение режима предварительной загрузки эвентов в Web Playlist.|
|`Preload Count`|Указание количества необходимых эвентов для их предварительной загрузки в Web Playlist. |

>Функционал параметра **Preload Count** задействуется в случае включённого параметра `Use Preloading`.
>Значение параметра **Preload Count** должно быть больше "0"

|||
|-------------------|----------|
|`MOS Preload`|Включение режима предварительной загрузки эвентов в Web Playlist, полученных по протоколу MOS.|

**1.1.10. Раздел Statiscs**

|Наименование параметра|Назначение|
|-------------------|----------|
|`Collect Statistic`|Включение режима сбора статистических данных по задействованной производительности аппаратной части. Статистические данные отображаются во вкладке System Monitor.|

**1.1.11. Раздел WebSocket**

Раздел **WebSocket** содержит следующие настраиваемые параметры:

|Наименование параметра|Назначение|
|-------------------|----------|
|`Certificate`|Указание директории (пути) к сертификату шифрования.|

>Сертификат необходим для установления соединения защищённым шифрованием. Сертификат представляет из себя файл формата ".pfx".

|||
|-------------------|----------|
|`Certificate Password`|Ввод пароля для сертификата шифрования.|
|`Secure Connection`|Включение режима зашифрованного соединения **Carrot Server**.|
|`Heartbeat interval, sec`|Указание временного интервала для отправки heartbeat сообщений с целью предотвращения обрыва соединения.|

### **2. Элемент "Tools"**

Элемент **Tools** cодержит следующие функциональные кнопки:

|Наименование функциональной кнопки|Назначение|
|-------------------|----------|
|`Change Administrator Password`|Смена пароля администратора.|
|`Reset Event Status`|Обновление поля компонентов для корректного отображения активных приложений.|
|`Set Server As Master`|Определение текущего **Carrot Server** в качестве "Мастера" (основного).|

>"Мастер" сервер отображается в поле статуса как Replication Index = True.
>
>При использовании нескольких серверов с реплицируемой (синхронизируемой) базой данных с логическим (булевым) значением отличающимся от "True" необходимо знать, что все остальные сервера определяются как резервные ("False").
>
>При отсутствии репликации (синхронизации) между серверами у всех будет присвоен индекс "True"! 

|||
|-------------------|----------|
|`Check Other Servers`|Проверка определения других серверов в качестве "Мастера" или резервного.|
|`Replicate Database`|Репликация (синхронизация) базы данных **Carrot Server**.|
|`Export DB file`|Экспорт базы данных **Carrot Server**.|
|`Export DB objects`|Экспорт объектов базы данных **Carrot Server**.|
|`Import DB file`|Импорт базы данных **Carrot Server**.|
|`Import DB objects`|Импорт объектов базы данных **Carrot Server**.|
|`Web`||
|`DataStream`||
|`Update DB to current Version`|Обновление базы данных до текущей версии **Carrot**.|
|`Remove Inaccessible DB Objects`|Удаление недоступных объектов базы данных.|

### **3. Элемент "Help"**

Элемент **Help** содержит функциональное окно **About** отображающее сведения о текущей версии сборки **ПО Carrot**.

### **4. Элемент "Основное рабочее пространство"**

![Carrot_Server_Main_Work_Window](..\images\CarrotServer\Carrot%20Server%20Main%20Work%20Window.png)

Интерфейс основного рабочего пространства включает в себя:
- кнопку **Disconect Selected** (1). Предназначена для удаления выбранных подключений из списка;
- кнопку **Refresh** (2). Предназначенна для обновления списка подключений. Используется для тех случаев, когда известно, что подключение существует, но оно не отображается в списке.

>Функционал кнопки **Refresh** реализован через цикл непрерывного обновления списка. В случае отображения всех подключений в списке, необходимо прервать обновление, для этого следует повторно нажать на кнопку **Refresh**.

- IP-адрес (3). Предназначен для отображения числового идентификатора подключаемого устройства;
- App (4). Предназначен для отображения имени подключенного (функционирующего) приложения;

>Дополнительно, после имени приложения, в круглых скобках может указываться способ определения приложения как "Master", что информирует о том что оно является "Основным" и поддерживает резервирования. В остальных случаях, приложение является "Резервным".

- Object (5). Предназначен для отображения имени объекта, с которым работает подключенное (функционирующее) приложение.

### **5. Элемент Статус-бар**

**Статус-бар** предназначен для отображения информационных сведений, а именно:
- Тип определения сервера (Основной или резервный), определяемый параметром **Replication Index**;

>Следует помнить, что "основной" сервер отображается с логическим (булевым) значением "True".

- Статус репликации (синхронизации) базы данных, определяемый параметром **DB Replication Progress = 0/0**.

---
