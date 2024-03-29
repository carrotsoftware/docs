# Список изменений rev. 3198 => rev. 3258

## Общие изменения
- Теперь не требуется перезапускать приложение при изменении адреса сервера.
- Добавлено изменение шага при зажатой кнопке NUD'а с помощью `shift` или `ctrl`.

## Carrot Server
- В настройках **CarrotServer** добавилось поле `LocalHost`, необходимое для работы в режиме репликации.

## Carrot Launcher
- Добавлена работа `BMD Tracked Input` в режиме `i`.

## Carrot WebPlaylist
- Добавлен множественный выбор эвентов в браузере в разделе эдитора для удаления.
- Добавлен множественный выбор плейлистов в браузере для удаления.
- Добавлен множественный выбор шаблонов в браузере для удаления.
- Добавлен множественный выбор медиа в браузере для удаления.
- Автогенерация эвентов на основе стейтов шаблона - `Generate Events` (`ПКМ` на шаблон в `Editor`).
- Исправлен `Cut-Paste` в браузере.
- Добавлено контекстное меню настроек переменных эвента в разделе эдитора.
- Добавлено совместное изменение нескольких числовых переменных у переменной эвента.
- Добавлено редактирование переменных при множественом выборе (мультиселект).
- Исправлена работа `Drag&Drop` в браузере.
- В настройках **WebPlaylist** добавлена опция работы кнопок плейлиста только в пределах выделенного `Story`.
- Возвращены `ToolTips` при наведении указателя на кнопки управления в эдиторе.
- Добавлено редактирование fps секвенции через контекстное меню переменной эвента в разделе эдитора.
- Добавлено игнорирование настройки `Reset` для секвенции в случае если вызывается `ClosingState`.

## Carrot Engine
- Добавлена проверка наличия вершин при отрисовке меша. Ранее при попытке открыть такой `FBX` движок падал.
- Исправлено поведение `ColorPicker`.
- В `AR` поменяны местами `ForeGround` и `BackGround` - теперь поведение такое же как в кеере.
- Добавлена настройка использования `TrackingOffsets` для масок кеера.

## Работа с AE шаблонами
- Добавлена выгрузка шаблона перед открытием нового в **Template Preview** (нет жора памяти).
- Добавлено сохранение настроек трекинга в **Template Preview**.
- Добавлен `Reset` трекинг буфера для **Template Preview**.
- Исправлено повторное добавление секвенции.
- Добавлен `Remote Link` для **Template Preview** (для `Runtime` изменения `Position`, `Scale`, `Rotation` AE шаблона, который сейчас проигрывается).
- Теперь в **TemplatePreview** отображается имя DB шаблона (если его нет - имя проекта АЕ).
- Добавлено сохранение открытой папки для форм открытия и сохранения шаблона.
- `AjaTrackedInput`, `BmdTrackedInput`, `AjaOutput`, `Decklink` адаптированы для работы с **TrackingPreview**.
- Добавлена сортировка переменных в **TemplatePreview** перед сохранением шаблона в DB.
- У текстовой переменной теперь есть настройка типа `RichText` - поддержка работы с HTML-текстом.
- В случае с `RichText` в поле `DefaultValue` добавлен тег на цвет текста из шаблона. 
- Добавлен эффект `Displacement Map`.

## Работа с UE шаблонами
- Добавлена поддержка секвенций в **UE**.
- Для шаблона **UE** добавлена поддержка **FPS** ниже тракта для видео и секвенций.