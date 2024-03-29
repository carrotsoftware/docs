# Работа с AE шаблонами.

## Основная информация по работе с AE Plugin.

### 1. Работа со слоями

#### 1.1. Поддерживаемые типы слоев

**Carrot Engine** поддерживает следующие типы слоев из **After Effects** при экспорте с помощью `Carrot AE Plugin`:

##### 1.1.1. Null Layer

Работает аналогично **AE**, к нему можно парентить другие слои, анимировать и применять эффекты, использовать в эскпрешенах и т.д. 

![AE_Null Layer](..\images\AE\image101.jpg "Null Layer")

---

##### 1.1.2. Solid Layer
   Аналогично **АЕ**. Отличие только в том, что в **Carrot** этот тип слоя рисуется в режиме `Bicubic sampling` (*пример на рис. ниже*)

   ![AE_CARROT_Solid Layer](..\images\AE\image102.jpg "Solid Layer")

---

##### 1.1.3. Shape Layer
   Для работы с **Shape Layers** их необходимо перед экспортом из After Effects в Carrot конвертировать в `Bezier Path`

   ![AE_BezierPath](..\images\AE\image103.jpg "Convert to Bezier Path")

   Поддерживается `Stroke` со скругленными краями, с возможностью редактирования толщины обводки `Stroke Width` и применения сплошной заливки `Fill`

   ![AE_Stroke](..\images\AE\image104.jpg "Stroke")

   Для применения масок на слое **Shape** необходимо предварительно переместить данный слой в `Precomposition` или использовать `Track Matte`
   
   ![AE_Carrot_Masks](..\images\AE\image105.jpg "AE_Carrot_Masks") 

   Векторные слои имеют ограничения по размеру композиции. Это нужно учитывать при построении архитектуры композиции. Для работы в режиме реального времени векторный слой растрируется и его **масштабирование более 100% может вызвать появление артефактов**. Аналогичным образом слой может обрезаться по границе композиции при масштабировании.

   ![AE_Carrot_Scale](..\images\AE\image106.jpg "AE_Carrot_Scale")

---

##### 1.1.4. Text Layer

О работа с текстовыми блоками можно ознакомиться в `пункте 3.1.`

---

##### 1.1.5. Media Layer
   Для циклического воспроизведения видео в **Carrot** нужно указать `Loop Times` больше 1

   ![AE_InterpretFootage](..\images\AE\image107.jpg "Interpret Footage")
   ![AE_Loop Times](..\images\AE\image108.jpg "Loop Times")
   
   Важно учитывать `Frame Rate` шаблона и тракта (*настроенного в Carrot Flow Chart*), проигрывание всей медиа будет происходить с этим **FPS** (*ускорение или замедление при несоответствии Frame Rate*)

   ![AE_FrameRate](..\images\AE\image109.jpg "Frame Rate")

---

##### 1.1.6. 3D слои

**Carrot Engine** считывает систему измерений из **After Effects** в **миллиметрах**, 

`1000px в After Effects = 1000mm в Carrot Engine`

![AE_Distance](..\images\AE\image110.jpg "Distance")
![AE_Distance](..\images\AE\image111.jpg "Distance")
![AE_Distance](..\images\AE\image112.jpg "Distance")
![AE_Distance](..\images\AE\image113.jpg "Distance")

---
---

#### 1.2. Эффекты наложения слоев и Track Matte

- `Track Matte` (Подложки отслеживания);
- `Parent Link` к другому слою или его свойствам (Привязка);
- `Blending Modes` (Режимы наложения).

---

##### 1.2.1. Поддерживаемые типы наложений слоев и их особенности

| Поддерживаемые режимы наложения из AE в данный момент | Ограниченная поддержка (результат может отличаться от After Effects) |
|:-----------------------------------------------------:|:--------------------------------------------------------------------:|
|  Linear Color | Pin Light |
| Silhouette Alpha | Hard Mix |
| Screen | Linear Light |
| Add | Difference |
| Lighten | Classic Color Dodge |
| Dissolve | Exclusion |
| Dancing Dissolve | Subtract |
| Darken | Divide |
| Multiply | Hue |
| Color Burn | Saturation |
| Linear Burn | Color |
| Darker Color | Luminosity |
| Linear Dodge | Stencil Alpha |
| Lighter Color | Stencil Luma |
| Soft Light | Silhouette Luma |
| Color Dodge | Classic Color Burn |
| Vivid Light | Lighter Color Dodge |
| | Hard Light |
| | Overlay |

---
---

#### 1.3. Работа с масками слоев

Ограничения при работе с Масками Слоёв:

- При булевых операция с масками, тип `Intersect` не должен идти первым. В этом случае, первую маску в режиме `Intersect` следует поменять на `Add`.

![AE_Carrot_Intersect](..\images\AE\image114_2.gif "Intersect")

- `Мask Feather` использует исключительно **билинейную интерполяцию** (важно учитывать при масках с острыми углами и высоким значением `Feather`).
- Отрицательное значение свойства `Мask Expansion` использует проприетарный алгоритм отличный от **After Effects**, результат необходимо контролировать в `Template Preview`.
- Тип маски `None` в **Carrot** делает весь слой невидимым.

![AE_Carrot_None](..\images\AE\image115.jpg "Mask - None")

---
---

#### 1.4. Анимация слоев

Необходимо ставить ключи анимации на всех вложенных композициях, иначе содержимое не будет обновляться при воспроизведении в **Carrot**. Более подробно о подготовке ключей анимации при экспорте шаблонов в **Сarrot** читайте в `"Шаг 4. Экспорт шаблона из проекта AE"`.

![AE_Keys](..\images\AE\image116.jpg "Keys")

---
---

### 2. Работа с эффектами

#### 2.1. Поддерживаемые эффекты и правила работы с ними

|**Поддерживаемые эффекты**              |
|:---------------------------------------|
| Blur & Sharpen - Sharpen               |
| Blur & Sharpen - Fast Box Blur         |
| Distort - Displacement Map             |
| Distort - Corner Pin                   |
| Time - Posterize Time                  | 
| Generate - Fill                        | 
| Generate - Gradient Ramp               | 
| Color Correction - Tritone             | 
| Color Correction - Tint                | 
| Color Correction - Levels              | 
| Color Correction - Curves              | 
| Expression Controls - 3D Point Control | 
| Expression Controls - Angle Control    | 
| Expression Controls - Checkbox Control | 
| Expression Controls - Color Control    | 
| Expression Controls - Point Control    | 
| Expression Controls - Slider Control   | 
| Transition - Wipes - Linear Wipe       | 

---

##### 2.1.1. Ограничения:
- `Gradient Ramp` работает только в режиме `Linear Ramp`.
- `Fill` – `Fill Mask` не поддерживается.
- Для работы с `Track Matte` со слоями на которых применены `Fast Box Blur` или `Displacement Map`, необходимо переместить слой с этими эффектами в `Precomposition`.

---
---

#### 2.2. Fast Box Blur особенности и ограничения

Доступный для изменения параметр `Fast Box Blur` в **Carrot** — `Blur Radius`, остальные параметры эффекта фиксированные:
- `Repeat Edge Pixels` – On;
- `Iterations` - 3;
- `Blur Dimensions` – Horizontal and Vertical.

---

- *При необходимости работы с `Track Matte` со слоем, к которому применён `Fast Box Blur`, данный слой предварительно переносится в `Precomposition`.*
- *Для корректной работы `Fast Box Blur` должен находится первым в списке эффектов на слое. Аналогичным, но не предпочтительным, способом можно разместить слой с другими эффектами в `Precomposition`, на который уже применить `Fast Box Blur`.*

---
---

#### 2.3. Posterize Time

Данный эффект используется для создания стоп-кадров, работает в значениях 50 и 0. Ключи должны быть жесткими.

*Пример использования: создания стоп-кадра в Carrot из проходного сигнала в момент запуска шаблона.*

![AE_Posterize Time](..\images\AE\image201.jpg "Posterize Time")

---
---

### 3. Работа с текстовыми блоками

#### 3.1. Текстовые блоки, их возможности и ограничения

   **Поддерживаемые параметры текстового слоя:**
   - Поддерживаемый кернинг — `Metrics`;
   - Поддерживаются: `гарнитура`, `стиль`, `толщина`, `межстрочное и межсимвольное расстояние`, `капитализация текста`, `выравнивание`.
   - Не импортируются: для `point text` переносы текста (*расставленные в After Effect*), посимвольные эффекты (*Text Animator*).
   - При работе с текстовыми блоками необходимо учитывать что для отображений всего текстового блока в **Carrot** используется **стиль** **первого символа этого блока**

   ![AE_Carrot_Text Layer](..\images\AE\image301.jpg "AE_Carrot_Text Layer")

   ---
   ---

#### 3.2. Особенности работы и ограничения работы со шрифтами

Используемые сторонние шрифты рекомендуется устанавливать в систему в формате `OTF`. Предварительно рекомендуется проверить отрисовку всех символов (*Ё,Й,Ж,Щ,О,0 и пр.*).

---
---

### 4. Работа с медиа (секвенциями, видео и сигналами SDI)

#### 4.1. Работа с медиа ресурсами

**Ограничения:**

- Не поддерживаются: `Duration of clip` и `Remapping`.
- Видео должны быть в формате `HD`, `FHD`, `2K`, `4K` и т.д., либо разрешение должно быть **кратно** **степени** **двойки**.
- Рекомендованные кодеки: `H264`, `HVENC`, либо `PNG-секвенции`.
- Медиа в `H264`, `HVENC`, `Prores` должны иметь захлесты без содержимого в начале и конце видео на **5-10 кадров**. В противном случае, при последующих проигрываниях шаблона заново, могут появляться старые кадры видео.
- Медиа в высоком разрешении рекомендуется использовать в кодеке `HVENC`, чтобы обрабатываться видеокартой и иметь высокую производительность, либо `png секвенцией`.

![AE_Overlap](..\images\AE\image401.jpg "Overlap")

---

#### 4.2. Работа с SDI сигналом

**Правила использования плейсхолдеров**

`Placeholder` - изображение, которое в дальнейшем будет использоваться **Carrot** для отображения содержимого других шаблонов, пользовательского медиа или входного сигнала. Должен иметь идентичные свойства (*разрешение*) используемых источников. 

Используя в дальнейшем слой с плейсхолдером как переменную, содержимое будет заменяться на всех слоях, использующих эту `PNG`.

![Placeholder](..\images\AE\image402.jpg "Placeholder 1")
![Placeholder](..\images\AE\image403.gif "Placeholder 2")
![Placeholder](..\images\AE\image404.jpg "Placeholder 3")

---
---

### 5. Работа с выражениями (Expression)

#### 5.1. Особенности работы с выражениями

В рамках работы с выражениями через `Expressions` и `Carrot Scripts` поддерживаются следующие методы:

`Global:`
```
- comp(name)
- footage(name)
- thisProject
- thisComp
- thisLayer
- thisProperty
- time
- value
```

`Other Math:`
```
- degreesToRadians(degrees)
- radiansToDegrees(radians)
```

`Comp:`
```
- Comp.layer(index)
- Comp.layer(name)
- Comp.width
- Comp.height
- Comp.duration
- Comp.name
```

`Footage:`
```
- Footage.width
- Footage.height
- Footage.duration
- Footage.pixelAspect
- Footage.name
```

`Property:`
```
- value
```

`Layer Sub-objects:`
```
- Layer.effect(name)
- Layer.effect(index)
```

`Layer General:`
```
- Layer.width
- Layer.height
- Layer.index
- Layer.parent
- Layer.hasParent
- Layer.inPoint
- Layer.outPoint
- Layer.startTime
```

`Layer Properties:`
```
- Layer.anchorPoint
- Layer.position
- Layer.scale
- Layer.rotation
- Layer.opacity
- Layer.name
```

`Layer 3D:`
```
- Layer.orientation
- Layer.rotationX
- Layer.rotationY
- Layer.rotationZ
```

---

**Text:**

Text.Font - используйте TextSource.FontSize, т.к. Carrot использует свой метод отрисовки текста.

Поддержка остальных методов не гарантируется, но возможна после обращения в техническую поддержку.

Для выражений используется логика и синтаксис аналогично `JavaScript Expression Engine`, которая отличается от `ExtendScript`, который может быть выставлен по умолчанию.

![AE_ExtendScript](..\images\AE\image501.jpg "ExtendScript")

Подробнее по [ссылке.](https://helpx.adobe.com/au/after-effects/using/legacy-and-extend-script-engine.html)

---

**Особенности метрических систем Adobe After Effects и Carrot Engine/Unreal Engine!**

**SourceRectAtTime.width** (*получение ширины слоя в пикселях*), применяемый к текстовому слою вернет в **Carrot** значение аналогично **AE** (1000), если применять фунцию к **Solid** слою, вернется значение в **1000** меньше (*0,5 вместо 500*), соответственно расчёты станут неверными, если не делать доп преобразований. 

Для необходимости сопоставления объектов с трекинг данными от трекинг систем (*stYpe, MoSys и т.д.*) в **Carrot** используется преобразование входящих значений в **unit**, где **1 unit = 1/1000px** (*система измерения AE*). Это преобразование не касается **Text Layer**. 

На производительность влияет по большей части не содержание выражений, а их количество в проекте.

---

#### 5.2. Расширенные [custom] выражения реализованные посредством Carrot Script. (примеры)

| **РАБОТА СО ВРЕМЕНЕМ** |               |                                                                                                      |
|:---------------------- |:--------------|:-----------------------------------------------------------------------------------------------------|
| **Команда**            | **Аргументы** | **Описание**                                                                                         |
| time                   | \-            | Возвращает значение времени AE композиции в секундах                                                 |
| thisComp.CurrentTime   | \-            | Возвращает значение времени AE композиции в секундах                                                 |
| st.hour                | \-            | Возвращает значение часа системного времени в формате от 0 до 59                                     |
| st.minute              | \-            | Возвращает значение минут системного времени в формате от 0 до 59                                    |
| st.second              | \-            | Возвращает значение секунд системного времени в формате от 0 до 59                                   |
| st.gethour()           | \-            | Возвращает значение часа системного времени в формате от 00 до 59                                    |
| st.getminute()         | \-            | Возвращает значение минут системного времени в формате от 00 до 59                                   |
| st.getsecond()         | \-            | Возвращает значение секунд системного времени в формате от 00 до 59                                  |
| st.gethouroffset       | (hh,mm,ss)    | Возвращает значение часа системного времени + смещение в формате от 00 до 59                         |
| st.getminuteoffset     | (hh,mm,ss)    | Возвращает значение минут системного времени + смещение в формате от 00 до 59                        |
| st.getsecondoffset     | (hh,mm,ss)    | Возвращает значение секунд системного времени + смещение в формате от 00 до 59                       |
| st.gethourinv          | (hh)          | Возвращает пользовательское значение - значение часа системного времени в формате от 00 до 59        |
| st.getminuteinv        | (mm)          | Возвращает пользовательское значение - значение минут системного времени в формате от 00 до 59       |
| st.getsecondinv        | (ss)          | Возвращает пользовательское значение - значение секунд системного времени в формате от 00 до 59      |
| st.getcounthour        | (hh,mm,ss)    | Возвращает разницу между пользовательским значением часа и текущим системным в формате от 00 до 59   |
| st.getcountminute      | (hh,mm,ss)    | Возвращает разницу между пользовательским значением минут и текущим системным в формате от 00 до 59  |
| st.getcountsecond      | (hh,mm,ss)    | Возвращает разницу между пользовательским значением секунд и текущим системным в формате от 00 до 59 |

| **РАБОТА С ТЕКСТОМ**            |                     |                                                                     |                                                                                                            |
|:--------------------------------|:--------------------|:--------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| **Команда**                     | **Аргументы**       | **Описание**                                                        | **Пример**                                                                                                 |
| TextSource.Text                 | \-                  | Возвращает/задает текстовое значение указанного текстового слоя     | thisComp.layer(1).TextSource.Text<br><br>comp("MainComp").layer("TextLayer").TextSource.Text = "TextValue" |
| TextSource.BoxTextSize          | \-                  | Возвращает размер Paragraph Text Box указанного текстового слоя     | thisComp.layer(1).TextSource.BoxTextSize                                                                   |
| TextSource.BoxTextSize.setValue | (\[width, height\]) | Задает размер Paragraph Text Box указанного текстового слоя         | thisComp.layer(1).TextSource.BoxTextSize.setValue(\[300, 100\])                                            |
| lastcharpos()                   | \-                  | Возвращает координаты последнего символа указанного текстового слоя | thisComp.layer(1).lastcharpos()                                                                            |
| charpos                         | (number)            | Возвращает координаты выбранного символа указанного текстового слоя | thisComp.layer(1).charpos(1)                                                                               |

| **РАБОТА С ЭФФЕКТАМИ**        |                  |                                                                                        |                                                                       |
|:------------------------------|:-----------------|:---------------------------------------------------------------------------------------|:----------------------------------------------------------------------|
| **Команда**                   | **Аргументы**    | **Описание**                                                                           | **Пример**                                                            |
| effect("Fill").Color          | \-               | Возвращает значение цвета эффекта "Fill" у указанного слоя                             | thisComp.layer(1).effect("Fill").Color                                |
| effect("Fill").Color.setValue | (\[R, G, B, A\]) | Задает значение цвета эффекта "Fill" у указанного слоя в формате Normalized Float RGBA | thisComp.layer(1).effect("Fill").Color.setValue(\[0.1, 0.5, 0.9, 0\]) |

---
---

### 6. Оптимизация

#### 6.1. Правила оптимизации

Для сохранения производительности рекомендуется использовать `PNG`, как альтернативу `Solid` с круглыми масками и эффектом градиента.

![AE_Optimized/Not optimized](..\images\AE\image601.jpg "Optimized/Not optimized")

---
---

Используем вместо нескольких видео - **1 видеоатлас**.

![AE_Video Atlas](..\images\AE\image602.jpg "Video Atlas")

#### 6.2. Уборка мусора

Перед экспортом надо нажать на головную композицию и сделать `File - Dependencies - Reduce Project`.

![AE_Scavengery](..\images\AE\image603.jpg "Scavengery")

---
---

#### 6.3. Размер и количество композиций

Рекомендуются избегать избыточных вложений `Precomposition` и держать глубину вложенности проекта в пределах **1-2 композиций**.

![AE_Сomposition Size](..\images\AE\image604.jpg "Сomposition Size")
![AE_Сomposition Size](..\images\AE\image605.jpg "Сomposition Size")

> Рекомендуется уменьшение общего числа композиций и количества одновременно используемых эффектов.

---
---

#### 6.4. Работа с масками в кривых

Маски с кривыми могут негативно повлиять на производительность при больших разрешениях композиции, рекомендуется использовать острые углы или `png`. 

![AE_Curves](..\images\AE\image606.jpg "Curves")

---
---

## Шаг 1. Установка Carrot AE Plugin.

**Carrot System Monitor** устанавливается на тех рабочих станциях, на которых установлен **After Effects** и которые предполагается использовать для экспорта шаблонов на **Carrot Server**.

---
---

**AE плагины:**
|Ревизия Carrot|Версия плагина|
|:-------------|:-------------|
|2864-по актуальную версию|AEGP_1.0.0_RC_3_2864|
|4165-по актуальную версию|AEGP_1.0.0_RC_4_4165 (добавлена проверка на недопустимые названия файлов при экспорте проекта из АЕ)|

---
---

Для установки **Carrot AE Plugin** необходимо выполнить следующее:

1. Скопируйте папку `AEGP` в директорию `C:/Program Files/Adobe/Common/Plug-ins/7.0/MediaCore`;
   <br/> ![AEGP path](..\images\image129.png)

2. Запустите **InitSettings** в папке `Carrot/Bin` от имени администратора.
   <br/> ![run admin](..\images\image54.png)

## Шаг 2. Настройка Carrot AE Plugin.

Для настройки **Carrot AE Plugin** необходимо выполнить следующее:

1.  Запустите **Carrot Server** `ServerWS.exe`.
2.  Убедитесь в том, что в настройках **Carrot Template Preview** указан адрес необходимого сервера и номер порта для получения трекинг данных.
3.  Плагин готов к работе.

## Шаг 3. Настройка AE проекта для Carrot.

### 3.1. Настройки композиции.

1. Запустите Adobe After Effects.
2. Откройте проект.
3. На панели **Project** откройте корневую композицию, которую хотите экспортировать.
   ![](..\images\workflow_AE\stage_01.png)

4. Выберите меню **Composition** > **Composition Settings...** или нажмите клавиши **CTRL**+**K**.
   ![](..\images\workflow_AE\stage_02.png)

5. Проверьте разрешение и частоту кадров композиции.
   ![](..\images\workflow_AE\stage_03.png)

   > Частота кадров композиции должна совпадать с частотой кадров видеотракта.
   >
   > Разрешение композиции должно совпадать с разрешением контейнера в схеме движка Carrot.
   > 
   > ![](..\images\workflow_AE\stage_04.png)

6. Удалите из проекта все неиспользуемые элементы. Для этого выберите **File** > **Dependencies** > **Remove Unused Footage**.
   ![](..\images\workflow_AE\stage_07.png)

### 3.2. Указание точек входа и выхода анимации.

![](..\images\image152.png)

Для того, чтобы Carrot распознал отрезки анимации, пользователю требуется выставить маркеры композиции. Композиция должна содержать минимум 3 маркера. Если в других композициях присутствуют какие-либо маркеры, то их следует удалить.

Для того, чтобы добавить маркера:

1. Переместите ползунок в начало композиции (или анимации) и поставьте первый маркер с помощью клавиши **Numpad «\*»** на цифровой клавиатуре или выберите **Layer** > **Markers** > **Add Marker**:
   ![](..\images\workflow_AE\stage_06.png)

2. Щелкните правой кнопкой мыши по добавленному маркеру и выберите **Settings...**
   ![](..\images\workflow_AE\stage_05.png)

3. В открывшемся окне измените комментарий маркера на `OUT`.

   ![](..\images\image9.png)

4. Переместите ползунок в середину композиции и поставьте следующий маркер.

   ![](..\images\image174.png)

5. Измените комментарий маркера на `IN`

   ![](..\images\image7.png)

   ![](..\images\image95.png)

6. Переместите ползунок в конец композиции и поставьте следующий маркер.

   ![](..\images\image177.png)

7. Измените комментарий маркера на `OUT`.

   ![](..\images\image9.png)

Расположение маркеров будет выглядеть следующим образом:

![](..\images\image17.png)

Здесь присутствуют два временных промежутка:

- `OUT` - `IN` (в движке именуется как `IN`)
- `IN` - `OUT` (в движке именуется как `OUT`)

Воспроизведение в движке этого шаблона будет выглядеть следующим образом:

- Шаблон не активен, графика не показывается.
- Шаблон активируется, проигрывается область между маркерами `OUT`-`IN`.
- Шаблон активен, графика остаётся на позиции маркера `IN` и именуется как `ACTIVE`.
- Шаблон деактивируется, проигрывается область между маркерами `IN`-`OUT`.

7. Сохраните проект.

>***Важно!***
>
>Пользователю важно помнить, что при создании `Precomposition` необходимо исключать использование маркеров. 

### 3.3. Указание точек дополнительных анимаций.

Композиция также может содержать дополнительные анимации помимо стандартных для входа и выхода. Для них также следует добавить маркеры. Для этого:

1. Переместите ползунок в начало желаемой анимации и добавьте новый маркер.
2. Измените комментарий маркера.
3. Переместите ползунок в конец желаемой анимации и добавьте ещё один маркер.
4. Измените комментарий маркера на желаемый.

Пример:

![](..\images\image140.png)

Здесь присутствуют три временных промежутка:

- `OUT` - `IN` (в движке именуется как `IN`)
- `IN` - `ANIM` (в движке именуется как `ANIM`)
- `ANIM` - `OUT` (в движке именуется как `OUT`)

Область между маркерами с одинаковыми именами (в примере `ANIM`-`ANIM`) игнорируется в **Carrot Engine** и пропускается при воспроизведении.

### 3.4. Дополнительная информация и рекомендации.

#### Проект

- Каждый шаблон рекомендуется сохранять в свой отдельный проект **After Effects**.
  > При экспорте шаблона из **After Effects** информация о всех композициях и контенте в проекте (в том числе неиспользуемых) передаётся и обрабатывается движком Carrot.

#### Эффекты

Поддерживаемые эффекты из **After Effects** в **Carrot Engine** в режиме реального времени:

- _Blur & Sharpen_ - **Sharpen**
- _Generate_ - **Fill**
- _Generate_ - **Gradient Ramp**
- _Color Correction_ - **Tritone**
- _Color Correction_ - **Tint**
- _Color Correction_ - **Levels**
- _Color Correction_ - **Curves**
- _Expression Controls_ - **3D Point Control**
- _Expression Controls_ - **Angle Control**
- _Expression Controls_ - **Checkbox Control**
- _Expression Controls_ - **Color Control**
- _Expression Controls_ - **Point Control**
- _Expression Controls_ - **Slider Control**
- _Transition_ - _Wipes_ - **Linear Wipe**

#### Композиции и слои

- Ключи анимации должны располагаться по краям кадров.
  ![](..\images\workflow_AE\stage_08.png)
- Слои, отмеченные в композиции как `Guide Layer` следует скрыть или удалить перед экспортом.
- При использовании логики **IF ELSE** внутри выражений, для корректной обработки в **Carrot Engine**, структура должна выглядеть следующим образом:

  ![](..\images\workflow_AE\stage_09.png)

- Все выражения, которые не требуют обработки в реальном времени, рекомендуется конвертировать в ключи анимации перед экспортом.

Поддерживаемые типы слоев в композиции:

- **Null Layer**
- **Solid Layer**
- **Shape Layer**, конвертированные в кривые Безье (без операций с контурами)
- **Text Layer** (без эффектов аниматора)
- **Media Layer** (MP4, MOV, JPG, PNG, PSD и т.д.)
  > В целях оптимизации шаблона и проекта PSD/AI слои внутри композиции рекомендуется заменить на Solid Layer, либо на готовое изображение PNG или JPG.

Поддерживаемые операции со слоями:

- **Track Matte** (Подложки отслеживания)
- **Parent Link** к другому слою или его свойствам (Привязка)
- **Blending Modes** (Режимы наложения)
- **Masking** (Маски)
- **Expressions** (Выражения)

#### Маски

- Маска в режиме наложения `None` скрывает отображение слоя в **Carrot Engine**.
- Единичную маску в режиме `Intersect` следует поменять на `Add`.
- Свойство `Mask Feather` по умолчанию в **Carrot Engine** использует бикубический режим сэмплинга.

#### Текст

- **Carrot Engine** считывает свойства текста (шрифта, размер, цвет, интервалы и т.д.) по первому символу и применяет их на все остальные символы.
- **Carrot Engine** принудительно применяет для кернинга текста тип `Metrics`.
- Используемые сторонние шрифты рекомендуется устанавливать в систему в формате **OTF**.

#### 3D слои

- **Carrot Engine** считывает систему измерений из After Effects в миллиметрах, т.е. 1000px в **After Effects** = 1000mm в **Carrot Engine**.
- Для вращения слоя следует использовать свойство **Orientation**.

## Шаг 4. Экспорт шаблона из проекта AE.

### 4.1. Экспорт шаблона.

>***Важно!***
>
>Перед экспортом AE шаблона, пользователю важно убедиться, что проект After Effects сохранён на его рабочей станции, в противном случае, попытка экспорта AE шаблона будет неудачной.

1. Выберите меню `Composition` - `Export Carrot Template`.

![](..\images\image42.png)

> Примечание: если этот пункт не активен, нажмите на раздел с композициями в нижней части интерфейса **After Effects**. 2. Появится окно **Template Preview**.

    ![](..\images\image30.png)

3. Откройте вкладку `Animation` в центральном разделе `Viewport`.

   ![](..\images\workflow_AE\stage_10.png)

4. В поле `Composition` выберите композицию, которая была экспортирована:
   ![](..\images\image151.png)

Благодаря маркерам здесь появились три стейта:

- `IN` (соответствует промежутку `OUT`-`IN`)
- `ANIM` (соответствует промежутку `IN`-`ANIM`)
- `OUT` (соответствует промежутку `ANIM`-`OUT`)

  ![](..\images\image140.png)

4. Проверьте правильность воспроизведения анимации:

   1. Нажмите на название стейта.
      ![](..\images\workflow_AE\stage_11.png)

   2. Дождитесь завершения проигрывания.

5. Нажмите кнопку `Save Template`.

   ![](..\images\image69.png)

6. В новом окне выберите директорию для сохранения шаблона.

7. В поле `Name` задайте название шаблона.

8. Нажмите на поле `Container`.

9. В появившемся окне выберите нужную схему движка и укажите соответствующий контейнер.

   ![](..\images\workflow_AE\stage_13.png)

10. Нажмите на кнопку **Save Template**.
11. Закройте **Template Preview**.

### 4.2. Создание переменных.

Текстовые или медиа слои могут выступать в качестве оперативно изменяемых параметров шаблона в **Carrot Web Playlist**:

![](..\images\image120.png)
![](..\images\image100.png)

1. Для назначения слоя в качестве переменной выполните следующее:

   1. Выберите требуемый слой
   2. Зажмите левую кнопку мыши и перетащите его в раздел **Variables**.

   ![](..\images\workflow_AE\stage_14.png)

   2. Выберите созданную переменную
   3. В поле `Name` введите желаемое имя переменной.

   ![](..\images\workflow_AE\stage_12.png) 4. В поле `Type` укажите необходимый тип переменной.

#### Создание текстовой переменной

![](..\images\workflow_AE\result_01.gif)
Для назначения текстового слоя в качестве переменной выполните следующее:

1. Раскройте слой и найдите свойство `Source Text`.
2. Зажмите левую кнопку мыши и перетащите его в раздел **Variables**.

   ![](..\images\image145.png)

   - В поле `Name` введите желаемое имя переменной.
   - В поле `Type` укажите тип `Text` или `RichText`.
     > В случае, если указан тип `RichText`, к содержимому поля `DefaultValue` добавится тег изначального цвета текста:
     > ![](..\images\image201.png)

   ```xml
    "<font color=\"#000000\">Text Sample</font>"
   ```

3. Настройте плавность линий, отображающих текст:
   1. Выберите текстовой слой.
      ![](..\images\image125.png)
   2. В разделе `Properties` измените параметр `StepCount` на желаемый:
      ![](..\images\image173.png)

   Примеры значений параметра `StepCount`:<br>
   `StepCount` = 1:<br>![](..\images\image89.png)<br>
   `StepCount` = 2:<br>![](..\images\image161.png)<br>
   `StepCount` = 4:<br>![](..\images\image107.png)<br>
>Примечание: чем больше значение параметра `StepCount`, тем больше потребляется ресурсов ГП на отрисовку текста.