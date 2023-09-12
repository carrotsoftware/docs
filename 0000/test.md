## Основная информация по работе AE Plugin

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

