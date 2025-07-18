# Работа со сторонним ПО

В данном разделе можно ознакомиться с принципами работы **Carrot** с **After Effects** и **Unreal Engine**.


## Работа с After Effects

### Основная информация по работе с Carrot After Effects Plugin

#### Работа со слоями

##### Поддерживаемые типы слоев

**Carrot Engine** поддерживает следующие типы слоев из **After Effects** при экспорте с помощью `Carrot AE Plugin`:

###### Null Layer

Работает аналогично **AE**, к нему можно парентить другие слои, анимировать и применять эффекты, использовать в эскпрешенах и т.д. 

![AE_Null Layer](..\images\AE\image101.jpg "Null Layer")

---

###### Solid Layer
   Аналогично **АЕ**. Отличие только в том, что в **Carrot** этот тип слоя рисуется в режиме `Bicubic sampling` (*пример на рис. ниже*)

   ![AE_CARROT_Solid Layer](..\images\AE\image102.jpg "Solid Layer")

---

###### Shape Layer
   Для работы с **Shape Layers** их необходимо перед экспортом из After Effects в Carrot конвертировать в `Bezier Path`

   ![AE_BezierPath](..\images\AE\image103.jpg "Convert to Bezier Path")

   Поддерживается `Stroke` со скругленными краями, с возможностью редактирования толщины обводки `Stroke Width` и применения сплошной заливки `Fill`

> В случае добавления других эффектов к **Shape Layers**, их отображение при экспорте шаблона проекта After Effects осуществляться не будет.

   ![AE_Stroke](..\images\AE\image104.jpg "Stroke")

   Для применения масок на слое **Shape** необходимо предварительно переместить данный слой в `Precomposition` или использовать `Track Matte`
   
   ![AE_Carrot_Masks](..\images\AE\image105.jpg "AE_Carrot_Masks") 

   Векторные слои имеют ограничения по размеру композиции. Это нужно учитывать при построении архитектуры композиции. Для работы в режиме реального времени векторный слой растрируется и его **масштабирование более 100% может вызвать появление артефактов**. Аналогичным образом слой может обрезаться по границе композиции при масштабировании.

   ![AE_Carrot_Scale](..\images\AE\image106.jpg "AE_Carrot_Scale")

---

###### Text Layer

О работа с текстовыми блоками можно ознакомиться в `пункте 3.1.`

---

###### Media Layer
   Для циклического воспроизведения видео в **Carrot** нужно указать `Loop Times` больше 1

   ![AE_InterpretFootage](..\images\AE\image107.jpg "Interpret Footage")
   ![AE_Loop Times](..\images\AE\image108.jpg "Loop Times")
   
   Важно учитывать `Frame Rate` шаблона и тракта (*настроенного в Carrot Flow Chart*), проигрывание всей медиа будет происходить с этим **FPS** (*ускорение или замедление при несоответствии Frame Rate*)

   ![AE_FrameRate](..\images\AE\image109.jpg "Frame Rate")

---

###### 3D слои

**Carrot Engine** считывает систему измерений из **After Effects** в **миллиметрах**, 

`1000px в After Effects = 1000mm в Carrot Engine`

![AE_Distance](..\images\AE\image110.jpg "Distance")
![AE_Distance](..\images\AE\image111.jpg "Distance")
![AE_Distance](..\images\AE\image112.jpg "Distance")
![AE_Distance](..\images\AE\image113.jpg "Distance")

---
---

##### Эффекты наложения слоев и Track Matte

- `Track Matte` (Подложки отслеживания);
- `Parent Link` к другому слою или его свойствам (Привязка);
- `Blending Modes` (Режимы наложения).

---

###### Поддерживаемые типы наложений слоев и их особенности

| Поддерживаемые режимы наложения из AE в данный момент | Ограниченная поддержка (результат может отличаться от After Effects) |
| :---------------------------------------------------: | :------------------------------------------------------------------: |
|                     Linear Color                      |                              Pin Light                               |
|                   Silhouette Alpha                    |                               Hard Mix                               |
|                        Screen                         |                             Linear Light                             |
|                          Add                          |                              Difference                              |
|                        Lighten                        |                         Classic Color Dodge                          |
|                       Dissolve                        |                              Exclusion                               |
|                   Dancing Dissolve                    |                               Subtract                               |
|                        Darken                         |                                Divide                                |
|                       Multiply                        |                                 Hue                                  |
|                      Color Burn                       |                              Saturation                              |
|                      Linear Burn                      |                                Color                                 |
|                     Darker Color                      |                              Luminosity                              |
|                     Linear Dodge                      |                            Stencil Alpha                             |
|                     Lighter Color                     |                             Stencil Luma                             |
|                      Soft Light                       |                           Silhouette Luma                            |
|                      Color Dodge                      |                          Classic Color Burn                          |
|                      Vivid Light                      |                         Lighter Color Dodge                          |
|                                                       |                              Hard Light                              |
|                                                       |                               Overlay                                |

---
---

##### Работа с масками слоев

Ограничения при работе с Масками Слоёв:

- При булевых операция с масками, тип `Intersect` не должен идти первым. В этом случае, первую маску в режиме `Intersect` следует поменять на `Add`.

![AE_Carrot_Intersect](..\images\AE\image114_2.gif "Intersect")

- `Мask Feather` использует исключительно **билинейную интерполяцию** (важно учитывать при масках с острыми углами и высоким значением `Feather`).
- Отрицательное значение свойства `Мask Expansion` использует проприетарный алгоритм отличный от **After Effects**, результат необходимо контролировать в `Template Preview`.
- Тип маски `None` в **Carrot** делает весь слой невидимым.

![AE_Carrot_None](..\images\AE\image115.jpg "Mask - None")

---
---

##### Анимация слоев

Необходимо ставить ключи анимации на всех вложенных композициях, иначе содержимое не будет обновляться при воспроизведении в **Carrot**. Более подробно о подготовке ключей анимации при экспорте шаблонов в **Сarrot** читайте в `"Шаг 4. Экспорт шаблона из проекта AE"`.

![AE_Keys](..\images\AE\image116.jpg "Keys")

---
---

#### Работа с эффектами

##### Поддерживаемые эффекты и правила работы с ними

| **Поддерживаемые эффекты**                         |
| :------------------------------------------------- |
| Blur & Sharpen - Sharpen                           |
| Blur & Sharpen - Fast Box Blur                     |
| Distort - Displacement Map                         |

>Поддержка эффекта **"Displacement Map"** осуществляется методом индексации его свойств. Перечень индексов присвоенным свойствам эффекта **"Displacement Map"** представлена в таблице ниже.
>
>|Наименование свойства эффекта "Displacement Map"|Присвоенный индекс|
>|-------------------|----------|
>|Red|`1`|
>|Green|`2`|
>|Blue|`3`|
>|Alpha|`4`|
>|Luminance|`5`|
>|Hue|`6`|
>|Lightness|`7`|
>|Saturation|`8`|
>|Full|`9`|
>|Half|`10`|
>|Off|`11`|
>
>В случае ввода в веб-интерфейсе **Web Playlist (Carrot Dashboard)** некорректного индекса - эффект **"Displacement Map"** применятся не будет.
>
>При экспорте шаблона проекта After Effects, стоит учитывать отсутствие поддержки функционала работы свойства **"Expand Output"** у эффекта **"Displacement Map"**.

|                                                    |
| :------------------------------------------------- |
| Distort - Corner Pin                               |
| Time - Posterize Time                              |
| Generate - Fill                                    |
| Generate - Gradient Ramp                           |
| Color Correction - Tritone                         |
| Color Correction - Tint                            |
| Color Correction - Levels                          |

>Отображение значений параметра **"Histogram"** эффекта **"Levels"** не поддерживается при экспорте шаблона проекта After Effects в рамках текущей версии **Carrot**.

|                                                    |
| :------------------------------------------------- |
| Color Correction - Curves                          |
| Expression Controls - 3D Point Control             |
| Expression Controls - Angle Control                |
| Expression Controls - Checkbox Control             |
| Expression Controls - Color Control                |
| Expression Controls - Point Control                |
| Expression Controls - Slider Control               |
| Transition - Wipes - Linear Wipe                   |
| Каналы (Channels) - Настроить подложку (Set Matte) |

---

###### Ограничения:
- `Gradient Ramp` работает только в режиме `Linear Ramp`.
- `Fill` – `Fill Mask` не поддерживается.
- Для работы с `Track Matte` со слоями на которых применены `Fast Box Blur` или `Displacement Map`, необходимо переместить слой с этими эффектами в `Precomposition`.
- `Linear Wipe` - применение эффекта на **"фигурные"** (**"Shape"**) и **"текстовые"** (**"Text"**) слои ограничено. В случае необходимости, применение данного эффекта возможно осуществить на прекомпозицию с данными слоями.
- `Настроить подложку (Set Matte)` - параметр `Растянуть подложку по размеру (Stretch Matte to Fit)` осуществляет свою работу исключительно в режиме **"Включён (True)"**. В случае, если параметр `Растянуть подложку по размеру (Stretch Matte to Fit)` используется как переменная и установлен в режим **"Выключен (False)"**, изменения к изображению применены не будут. 

---
---

##### Fast Box Blur особенности и ограничения

Доступный для изменения параметр `Fast Box Blur` в **Carrot** — `Blur Radius`, остальные параметры эффекта фиксированные:
- `Repeat Edge Pixels` – On;
- `Iterations` - 3;
- `Blur Dimensions` – Horizontal and Vertical.

---

- *При необходимости работы с `Track Matte` со слоем, к которому применён `Fast Box Blur`, данный слой предварительно переносится в `Precomposition`.*
- *Для корректной работы `Fast Box Blur` должен находится первым в списке эффектов на слое. Аналогичным, но не предпочтительным, способом можно разместить слой с другими эффектами в `Precomposition`, на который уже применить `Fast Box Blur`.*

---
---

##### Posterize Time

Данный эффект используется для создания стоп-кадров, работает в значениях 50 и 0. Ключи должны быть жесткими.

*Пример использования: создания стоп-кадра в Carrot из проходного сигнала в момент запуска шаблона.*

![AE_Posterize Time](..\images\AE\image201.jpg "Posterize Time")

---
---

#### Работа с текстовыми блоками

##### Текстовые блоки, их возможности и ограничения

   **Поддерживаемые параметры текстового слоя:**
   - Поддерживаются: `Семейство шрифтов`, `Стиль шрифта`, `Размер шрифта`, `Треккинг (межбуквенное расстояние)`, `Интерлиньяж`, `Кернинг (исключительно "Metrics")`, `Обводка`, `Вертикальное масштабирование` и `Дополнительные стили (исключительно "Заглавные (All Caps)")`.
   - Не импортируются: для `point text` переносы текста (*расставленные в After Effect*), посимвольные эффекты (*Text Animator*).
   - При экспорте текстовых анимаций, созданных с использованием инструмента **Text Animator** в приложение **Template Preview** отсутствует поддержка работы параметров управления плавностью переходов анимации, таких как `Ease High` и `Ease Low`.
   - При работе с текстовыми блоками необходимо учитывать что для отображений всего текстового блока в **Carrot** используется **стиль** **первого символа этого блока**

   ![AE_Carrot_Text Layer](..\images\AE\image301.jpg "AE_Carrot_Text Layer")

   ---
   ---

##### Особенности работы и ограничения работы со шрифтами

Используемые сторонние шрифты рекомендуется устанавливать в систему в формате `OTF`. Предварительно рекомендуется проверить отрисовку всех символов (*Ё,Й,Ж,Щ,О,0 и пр.*).

---
---

#### Работа с медиа (секвенциями, видео и сигналами SDI)

##### Работа с медиа ресурсами

**Ограничения:**

- Не поддерживаются: `Duration of clip` и `Remapping`.
- Видео должны быть в формате `HD`, `FHD`, `2K`, `4K` и т.д., либо разрешение должно быть **кратно** **степени** **двойки**.
- Рекомендованные кодеки: `H264`, `HVENC`, либо `PNG-секвенции`.
- Медиа в `H264`, `HVENC`, `Prores` должны иметь захлесты без содержимого в начале и конце видео на **5-10 кадров**. В противном случае, при последующих проигрываниях шаблона заново, могут появляться старые кадры видео.
- Медиа в высоком разрешении рекомендуется использовать в кодеке `HVENC`, чтобы обрабатываться видеокартой и иметь высокую производительность, либо `png секвенцией`.

![AE_Overlap](..\images\AE\image401.jpg "Overlap")

---

##### Работа с SDI сигналом

**Правила использования плейсхолдеров**

`Placeholder` - изображение, которое в дальнейшем будет использоваться **Carrot** для отображения содержимого других шаблонов, пользовательского медиа или входного сигнала. Должен иметь идентичные свойства (*разрешение*) используемых источников. 

Используя в дальнейшем слой с плейсхолдером как переменную, содержимое будет заменяться на всех слоях, использующих эту `PNG`.

![Placeholder](..\images\AE\image402.jpg "Placeholder 1")
![Placeholder](..\images\AE\image403.gif "Placeholder 2")
![Placeholder](..\images\AE\image404.jpg "Placeholder 3")

---
---

#### Работа с выражениями (Expression)

##### Особенности работы с выражениями

>При формировании выражений (Expressions), необходимо осуществлять их запись в виде массива чисел (инкапсулировать в **"квадратные"** скобки) в случаях планируемой работы с вещественными числами.

В рамках работы с выражениями через `Expressions` и `Carrot Scripts` поддерживаются следующие методы:

<table>
    <thead>
      <tr>
        <th style="text-align: center; vertical-align: middle">№ п/п</th>
        <th style="text-align: center; vertical-align: middle">Выражение</th>
        <th style="text-align: center; vertical-align: middle">Альтернативный вид записи</th>
        <th style="text-align: center; vertical-align: middle">Примечание</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td style="text-align: center; vertical-align: middle">1.</td>
      <td colspan="3" align="center">Global</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.1.</td>
        <td style="vertical-align: middle"><code>comp(name)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.2.</td>
        <td style="vertical-align: middle"><code>footage(name)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.3.</td>
        <td style="vertical-align: middle"><code>thisProject</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.4.</td>
        <td style="vertical-align: middle"><code>thisComp</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.5.</td>
        <td style="vertical-align: middle"><code>thisLayer</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.6.</td>
        <td style="vertical-align: middle"><code>thisProperty</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.7.</td>
        <td style="vertical-align: middle"><code>time</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">1.8.</td>
        <td style="vertical-align: middle"><code>value</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">2.</td>
      <td colspan="3" align="center">Other Math</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">2.1.</td>
        <td style="vertical-align: middle"><code>degreesToRadians(degrees)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
        <tr>
        <td style="text-align: center; vertical-align: middle">2.2.</td>
        <td style="vertical-align: middle"><code>radiansToDegrees(radians)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">3.</td>
      <td colspan="3" align="center">Comp</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.1.</td>
        <td style="vertical-align: middle"><code>Comp.layer(index)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.2.</td>
        <td style="vertical-align: middle"><code>Comp.layer(name)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.3.</td>
        <td style="vertical-align: middle"><code>Comp.width</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.4.</td>
        <td style="vertical-align: middle"><code>Comp.height</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.5.</td>
        <td style="vertical-align: middle"><code>Comp.duration</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">3.6.</td>
        <td style="vertical-align: middle"><code>Comp.name</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">4.</td>
      <td colspan="3" align="center">Footage</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">4.1.</td>
        <td style="vertical-align: middle"><code>Footage.width</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">4.2.</td>
        <td style="vertical-align: middle"><code>Footage.height</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">4.3.</td>
        <td style="vertical-align: middle"><code>Footage.duration</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">4.4.</td>
        <td style="vertical-align: middle"><code>Footage.pixelAspect</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">4.5.</td>
        <td style="vertical-align: middle"><code>Footage.name</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">5.</td>
      <td colspan="3" align="center">Property</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">5.1.</td>
        <td style="vertical-align: middle"><code>value</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">6.</td>
      <td colspan="3" align="center">Layer Sub-objects</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">6.1.</td>
        <td style="vertical-align: middle"><code>Layer.effect(name)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">6.2.</td>
        <td style="vertical-align: middle"><code>Layer.effect(index)</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">7.</td>
      <td colspan="3" align="center">Layer General</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.1.</td>
        <td style="vertical-align: middle"><code>Layer.width</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.2.</td>
        <td style="vertical-align: middle"><code>Layer.height</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.3.</td>
        <td style="vertical-align: middle"><code>Layer.index</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.4.</td>
        <td style="vertical-align: middle"><code>Layer.parent</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.5.</td>
        <td style="vertical-align: middle"><code>Layer.hasParent</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.6.</td>
        <td style="vertical-align: middle"><code>Layer.inPoint</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.7.</td>
        <td style="vertical-align: middle"><code>Layer.outPoint</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.8.</td>
        <td style="vertical-align: middle"><code>Layer.startTime</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">7.9.</td>
        <td style="vertical-align: middle"><code>Layer.name</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">8.</td>
      <td colspan="3" align="center">Layer Properties</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">8.1.</td>
        <td style="vertical-align: middle"><code>Layer.anchorPoint</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">8.2.</td>
        <td style="vertical-align: middle"><code>Layer.position</code></td>
        <td style="vertical-align: middle"><code>Layer.transform.position</code></td>
        <td style="vertical-align: middle">Во избежание случаев некорректной работы выражения, рекомендуется использовать альтернативный вид записи.</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">8.3.</td>
        <td style="vertical-align: middle"><code>Layer.scale</code></td>
        <td style="vertical-align: middle"><code>Layer.transform.scale</code></td>
        <td style="text-align: center; vertical-align: middle">При использовании данного выражения, необходимо учитывать значение по оси Z (по умолчанию - <code>100</code>), в том числе для 2D объектов.</td>
      </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">8.4.</td>
        <td style="vertical-align: middle"><code>Layer.Enabled</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
    <tr>
      <td style="text-align: center; vertical-align: middle">9.</td>
      <td colspan="3" align="center">Layer 3D</td>
    </tr>
      <tr>
        <td style="text-align: center; vertical-align: middle">9.1.</td>
        <td style="vertical-align: middle"><code>Layer.orientation</code></td>
        <td style="text-align: center; vertical-align: middle">---</td>
        <td style="text-align: center; vertical-align: middle">---</td>
      </tr>
      </tbody>
</table>


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

##### Расширенные [custom] выражения реализованные посредством Carrot Script. (примеры)

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

#### Оптимизация

##### Правила оптимизации

Для сохранения производительности рекомендуется использовать `PNG`, как альтернативу `Solid` с круглыми масками и эффектом градиента.

![AE_Optimized/Not optimized](..\images\AE\image601.jpg "Optimized/Not optimized")

---
---

Используем вместо нескольких видео - **1 видеоатлас**.

![AE_Video Atlas](..\images\AE\image602.jpg "Video Atlas")

##### Уборка мусора

Перед экспортом надо нажать на головную композицию и сделать `File - Dependencies - Reduce Project`.

![AE_Scavengery](..\images\AE\image603.jpg "Scavengery")

---
---

##### Размер и количество композиций

Рекомендуются избегать избыточных вложений `Precomposition` и держать глубину вложенности проекта в пределах **1-2 композиций**.

![AE_Сomposition Size](..\images\AE\image604.jpg "Сomposition Size")
![AE_Сomposition Size](..\images\AE\image605.jpg "Сomposition Size")

> Рекомендуется уменьшение общего числа композиций и количества одновременно используемых эффектов.

---
---

##### Работа с масками в кривых

Маски с кривыми могут негативно повлиять на производительность при больших разрешениях композиции, рекомендуется использовать острые углы или `png`. 

![AE_Curves](..\images\AE\image606.jpg "Curves")

---
---

### Установка Carrot AE Plugin

**Carrot System Monitor** устанавливается на тех рабочих станциях, на которых установлен **After Effects** и которые предполагается использовать для экспорта шаблонов на **Carrot Server**.

---
---

**AE плагины:**

| Наименование плагина | Поддерживаемая версия After Effects |
| :------------------- | :---------------------------------- |
| AEGP_4391            | After Effects 2022                  |
| AEGP_4391            | After Effects 2023                  |

---
---

Для установки **Carrot AE Plugin** необходимо выполнить следующее:

1. Скопируйте папку `AEGP` в директорию `C:/Program Files/Adobe/Common/Plug-ins/7.0/MediaCore`;
   <br/> ![AEGP path](..\images\image129.png)

2. Запустите **InitSettings** в папке `Carrot/Bin` от имени администратора.
   <br/> ![run admin](..\images\image54.png)

### Настройка Carrot AE Plugin

Для настройки **Carrot AE Plugin** необходимо выполнить следующее:

1.  Запустите **Carrot Server** `ServerWS.exe`.
2.  Убедитесь в том, что в настройках **Carrot Template Preview** указан адрес необходимого сервера и номер порта для получения трекинг данных.
3.  Плагин готов к работе.

### Настройка AE проекта для Carrot

#### Настройки композиции.

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

#### Указание точек входа и выхода анимации.

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
>При создании **"прекомпозиции"**, необходимо исключать использование маркеров (точек анимации) **"основной композиции"**.
>
>В случае наличия маркеров (точек анимации) в **"основной композиции"**  и создания на её основе **"прекомпозиции"** с изменённым временным интервалом, возможно расположение маркеров (точек анимации) за её пределами.

#### Указание точек дополнительных анимаций.

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

#### Дополнительная информация и рекомендации

##### Проект

- Каждый шаблон рекомендуется сохранять в свой отдельный проект **After Effects**.
  > При экспорте шаблона из **After Effects** информация о всех композициях и контенте в проекте (в том числе неиспользуемых) передаётся и обрабатывается движком Carrot.

##### Эффекты

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

##### Композиции и слои

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


Поддерживаемые экспортируемые свойства слоя представлены в таблице ниже:

<table>
  <thead>
    <tr>
      <th>Наименование экспортируемого свойства</th>
      <th>Наименование параметра</th>
      <th>Примечание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="12">Текст (Text)</td>
      <td>Исходный текст (Source Text)</td>
      <td rowspan="12">---</td>
    </tr>
    <tr>
      <td>Контур (Path)</td>
    </tr>
    <tr>
      <td>Обратная траектория (Reverse Path)</td>
    </tr>
    <tr>
      <td>Перпендикулярно пути (Perpendicular To Path)</td>
    </tr>
    <tr>
      <td>Принудительное выравнивание (Force Alignment)</td>
    </tr>
    <tr>
      <td>Первое поле (First Margin)</td>
    </tr>
    <tr>
      <td>Последнее поле (Last Margin)</td>
    </tr>
    <tr>
      <td>Группирование опорной точки (Anchor Point Grouping)</td>
    </tr>
    <tr>
      <td>Выравнивание при группировании (Grouping Alignment)</td>
    </tr>
    <tr>
      <td>Залив./обвод. (Fill/Stroke)</td>
    </tr>
    <tr>
      <td>Наложение между символами (Inter-Character Blending)</td>
    </tr>
    <tr>
      <td>Аниматоры (Animators)</td>
    </tr>
    <tr>
      <td rowspan="4">Маски (Masks)</td>
      <td>Контур маски (Mask Path)</td>
      <td rowspan="4">---</td>
    </tr>
    <tr>
      <td>Растушёвка маски (Mask Feather)</td>
    </tr>
    <tr>
      <td>Непрозрачность маски (Mask Opacity)</td>
    </tr>
    <tr>
      <td>Расширение маски (Mask Expansion)</td>
    </tr>
    <tr>
      <td>Эффекты (Effects)</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td rowspan="12">Преобразовать (Transform)</td>
      <td>Опорная точка (Anchor Point)</td>
      <td rowspan="12">---</td>
    </tr>
    <tr>
      <td>Положение (Position)</td>
    </tr>
    <tr>
      <td>X Положение (X Position)</td>
    </tr>
    <tr>
      <td>Y Положение (Y Position)</td>
    </tr>
    <tr>
      <td>Z Положение (Z Position)</td>
    </tr>
    <tr>
      <td>Масштаб (Scale)</td>
    </tr>
    <tr>
      <td>Ориентация (Orientation)</td>
    </tr>
    <tr>
      <td>Поворот X (X Rotation)</td>
    </tr>
    <tr>
      <td>Поворот Y (Y Rotation)</td>
    </tr>
    <tr>
      <td>Поворот (Rotation) / Поворот Z (Z Rotation)</td>
    </tr>
    <tr>
      <td>Непрозрачность (Opacity)</td>
    </tr>
    <tr>
      <td>Отображается в отражениях (Appears in Reflections)</td>
    </tr>
    <tr>
      <td rowspan="2">Геометрические параметры (Geometry Options)</td>
      <td>Кривизна (Curvature)</td>
      <td rowspan="2">---</td>
    </tr>
    <tr>
      <td>Сегменты (Segments)</td>
    </tr>
    <tr>
      <td rowspan="5">Геометрические параметры (Geometry Options)</td>
      <td>Тип фаски  (Bevel Style)</td>
      <td rowspan="5">---</td>
    </tr>
    <tr>
      <td>Направление фаски (Bevel Direction)</td>
    </tr>
    <tr>
      <td>Глубина фаски (Bevel Depth)</td>
    </tr>
    <tr>
      <td>Глубина фаски отверстия (Hole Bevel Depth)</td>
    </tr>
    <tr>
      <td>Глубина экструзии (Extrusion Depth)</td>
    </tr>
    <tr>
      <td rowspan="16">Параметры материала (Material Options)</td>
      <td>Отбрасывает тени (Casts Shadows)</td>
      <td rowspan="16">---</td>
    </tr>
    <tr>
      <td>Передача света (Light Transmission)</td>
    </tr>
    <tr>
      <td>Принимает тени (Accepts Shadows)</td>
    </tr>
    <tr>
      <td>Принимает свет (Accepts Lights)</td>
    </tr>
    <tr>
      <td>Отображается в отражениях (Appears in Reflections)</td>
    </tr>
    <tr>
      <td>Освещение (Ambient)</td>
    </tr>
    <tr>
      <td>Диффузия (Diffuse)</td>
    </tr>
    <tr>
      <td>Интенсивность зеркального отражения (Specular Intensity)</td>
    </tr>
    <tr>
      <td>Зеркальный блеск (Specular Shininess)</td>
    </tr>
    <tr>
      <td>Металл (Metal)</td>
    </tr>
    <tr>
      <td>Интенсивность отражения (Reflection Intensity)</td>
    </tr>
    <tr>
      <td>Резкость отражения (Reflection Sharpness)</td>
    </tr>
    <tr>
      <td>Уменьшение отражения (Reflection Rolloff)</td>
    </tr>
    <tr>
      <td>Прозрачность (Transparency)</td>
    </tr>
    <tr>
      <td>Уменьшение прозрачности (Transparency Rolloff)</td>
    </tr>
    <tr>
      <td>Индекс преломления (Index of Refraction)</td>
    </tr>
    <tr>
      <td>Наборы (Sets)</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>Запись кэша элемента (Item Cache Entry)</td>
      <td>---</td>
      <td>---</td>
    </tr>
  </tbody>
</table>

>При настройке параметров экспортируемых свойств слоя следует учитывать особенности взаимодействия **Carrot After Effects Plugin** с **After Effects**, при которых поддержка свойств рендер-движка **Cinema 4D** ограничена.

Поддерживаемые операции со слоями:

- **Track Matte** (Подложки отслеживания)
- **Parent Link** к другому слою или его свойствам (Привязка)
- **Blending Modes** (Режимы наложения)
- **Masking** (Маски)
- **Expressions** (Выражения)

##### Маски

- Маска в режиме наложения `None` скрывает отображение слоя в **Carrot Engine**.
- Единичную маску в режиме `Intersect` следует поменять на `Add`.
- Свойство `Mask Feather` по умолчанию в **Carrot Engine** использует бикубический режим сэмплинга.

##### Текст

- **Carrot Engine** считывает свойства текста (шрифта, размер, цвет, интервалы и т.д.) по первому символу и применяет их на все остальные символы.
- **Carrot Engine** принудительно применяет для кернинга текста тип `Metrics`.
- Используемые сторонние шрифты рекомендуется устанавливать в систему в формате **OTF**.

##### 3D слои

- **Carrot Engine** считывает систему измерений из After Effects в миллиметрах, т.е. 1000px в **After Effects** = 1000mm в **Carrot Engine**.
- Для вращения слоя следует использовать свойство **Orientation**.

### Экспорт шаблона из проекта After Effects

#### Экспорт шаблона

>***Важно!***
>
>В целях обеспечения корректной работы экспортируемого шаблона After Effects в Carrot, необходимо предварительно осуществить проверку его соответствия следующим пунктам:
>- проект After Effects сохранён на рабочей станции (в противном случае, попытка экспорта шаблона After Effects будет неудачной);
>- в проекте After Effects содержатся вся необходимая мультимедийная информация (отсутствует утерянная или повреждённая мультимедийная информация);
>- в проекте After Effects при настройке свойств различных элементов (эффекты, анимации и т.п.), их параметры соответствуют диапазону возможных значений; 
>- точки анимации в проекте After Effects расставлены в необходимых местах и соответствуют установленному времени воспроизведения (в случае, если проводились работы по изменению кадровой частоты в композиции);
>- при наличии 2D слоя c родительским элементом 3D слоя, стоит учитывать, что при экспорте композиции, данный 2D слой будет интерпретироваться и обрабатываться как 3D;
>- в случае использования в композиции видеоряда из последовательности изображений (секвенции), необходимо убедиться, что нумерация изображения соответствует количеству чисел общей длительности композиции. Пример: композиция состоит из 578 кадров, значит нумерация изображений должна быть трёхзначной и соответствовать следующей последовательности **001, 002, ..., 578**.
>
>>Также при использовании видеоряда из последовательности изображений (секвенции) необходимо учитывать следующие особенности:
>>- импорт последовательности изображений (секвенции) осуществляется в полном объёме из одной директории со строгой привязкой к нумерации.;
>>- воспроизведение последовательности изображений (секвенции) осуществляется с первого до последнего файла. Отсутствует возможность воспроизведения отдельных файлов последовательности.

1. Выберите меню `Composition` - `Export Carrot Template`.

![](..\images\image42.png)

> Примечание: если этот пункт не активен, нажмите на раздел с композициями в нижней части интерфейса **After Effects**. 2. Появится окно **Template Preview**.
> 
>Стоит учитывать, что параметр **"цвет подложки"** (**"Background Color"**) композиции (в случае его наличия) будет отображаться в приложении **Template Preview**, при этом, отображение данного параметра в приложении **Carrot Engine** осуществляться не будет.
>
>Важно отметить, что каждый слой шаблона After Effects содержит параметры **"X Position"**, **"Y Position"** и **"Z Position"**, значения которых по умолчанию равны **"0"**. При формировании на их основе переменных, слой будет расположен относительно значения **"0"**.


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

#### Создание переменных.

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



## Работа с Unreal Engine 5

В данном разделе можно ознакомиться с установкой **Unreal Engine 5**, а также обучиться созданию и настройке его проектов для взаимодействия с **Carrot**.

>Перед началом работы, необходимо произвести установку (инициализацию) и первоначальную настройку приложений **Carrot**.

---


### Установка Epic Games Launcher

Для установки **Epic Games Launcher** необходимо:

1. ![1.1.](..\images\UnrealEngine\Установка%20EGL\1.1.jpg)

Перейти на сайт [`Epic Games Store`](https://store.epicgames.com/) и нажать на кнопку [`Загрузить/Download`](https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=dc4b0d2024ff48528e324e6a3e5ba8cf) и дождаться завершения загрузки установщика.

2. После загрузки установщика **Epic Games Launcher** необходимо его запустить и провести процедуру инсталяции на локальную рабочую станцию.

3. ![1.2.](..\images\UnrealEngine\Установка%20EGL\1.2.jpg)

Запустить установленный **Epic Games Launcher** и авторизоваться (создать или войти в учётную запись) в нём.

>В случае, если не удаётся войти в учётную запись при нажатии на кнопку `Войти позже` в окне авторизации, установка **Unreal Engine** будет невозможна.

4. ![1.3.](..\images\UnrealEngine\Установка%20EGL\1.3.jpg)

С целью скрытия информации некасающейся работы с **Unreal Engine 5**, следует соблюсти следующие действия:

- перейти в раздел **"Параметры"**;
- включить параметры **"Скрыть игровую библиотеку"** и **"Запустить при включении компьютера"**;
- отключить параметры **"Отображать игровые уведомления"** и **"Показывать уведомления о новостях и специальных предложениях"**.

![1.4.](..\images\UnrealEngine\Установка%20EGL\1.4.jpg)

---

### Установка Unreal Engine 5

Для установки **Unreal Engine 5** необходимо:

1. ![2.1.](..\images\UnrealEngine\Установка%20UE5\2.1.jpg)

Открыть **Epic Games Launcher**, перейти в раздел **Unreal Engine** и нажать на вкладку **"Библиотека"**.

2. ![2.2.](..\images\UnrealEngine\Установка%20UE5\2.2.jpg)

Нажать кнопку `+` и выпадающем списке выбрать необходимую версию **Unreal Engine**.

3. Нажать кнопку `Установить` и дождаться окончания инсталляции **Unreal Engine**.

>В случае установки **Unreal Engine** впервые, после нажатия кнопки `Установить` отобразится окно **Параметры установки**. С целью оптимизации процесса установки, следует отключить компоненты, не будут использоваться при работе с **Carrot**, а именно: `Android`, `IOS` и `Linux`
>![2.3.](..\images\UnrealEngine\Установка%20UE5\2.3.jpg)

---

### Создание проекта Unreal Engine 5

Для создания проекта в **Unreal Engine 5**, необходимо:

1. ![3.1.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.1.jpg)

Запустить установленный **Unreal Engine** с помощью соответствующей кнопки.

2. ![3.2.](..\images\UnrealEngine\Создание%20Проекта%20UE5\3.2.jpg)

После запуска **Unreal Engine** откроется окно **"Unreal Project Browser"**, в котором необходимо присвоить проекту имя и соблюсти следующие действия:
- нажать на вкладку `Games` (1);
- нажать на шаблон `Blank` (2);
- в свойствах проекта выбрать режим `BLUEPRINT` (проект без кода) (3);
- убрать галочку с параметра `Starter Content` (4);
- нажать кнопку `Create` (5).

---

### Установка Carrot Unreal Engine Plugin

Перед установкой **Carrot Unreal Engine Plugin** необходимо закрыть запущенный проект.

>Актуальные версии плагинов для **Unreal Engine**.
>
>|Наименование плагина|Поддерживаемая версия Unreal Engine|
>|-------------------|----------|
>|UEPlugin_4.27_206|Unreal Engine 4.27|
>|UEPlugin_5.1_206|Unreal Engine 5.1|
>|UEPlugin_5.2_206|Unreal Engine 5.2|
>|UEPlugin_5.3_206|Unreal Engine 5.3|
>
>В случае использования специализированных версий **Unreal Engine**, включающих в себя экспериментальные функции, необходимо осуществить первоначальную настройку и установить соответствующий **Carrot Unreal Engine Plugin**.
>
>Настройку специализированной версии **Carrot Unreal Engine Plugin** для **Unreal Engine 5.2 RTXDI** необходимо осуществить в следующей последовательности:
>- найти и открыть файл **"UnrealEditor.modules"** с помощью текстового редактора в директории с установленным **Unreal Engine 5.2 RTXDI**, располагаемого по следующему пути `…\UnrealEngine-nvrtx-5.2.0-1\Engine\Binaries\Win64\UnrealEditor.modules`;
>- в открывшемся файле **"UnrealEditor.modules"** скопировать уникальный идентификационный номер **"BuildId"**;
>- осуществить замену уникального идентификационного номера **"BuildId"** файла **"UnrealEditor.modules"** в папке **"Carrot"** специализированной версии **Carrot Unreal Engine Plugin**, располагаемой по следующему пути  `…\Carrot\Binaries\Win64\UnrealEditor.modules`;
>- аналогичные действия произвести в папке **"CarrotEditor"** специализированной версии **Carrot Unreal Engine Plugin**, располагаемой по следующему пути  `…\CarrotEditor\Binaries\Win64\UnrealEditor.modules`.


Для установки **Carrot Unreal Engine Plugin** необходимо:

1. Открыть содержимое папки **Carrot Unreal Engine Plugin**.

2. ![4.1.](..\images\UnrealEngine\Установка%20Carrot%20UEP\4.1.jpg)

Скопировать папки **"Carrot"** и **"CarrotEditor"** в папку **"VirtualProduction"** установленного **Unreal Engine**.

>По умолчанию установленный **Unreal Engine** располагается в следующей директории:
>
>`C:\Program Files\Epic Games\Версия_Unreal_Engine\Engine\Plugins\VirualProduction`
>
>В случае использования **Unreal Engine 5.2** имеется возможность осуществить установку **Carrot Unreal Engine Plugin** непосредственно в созданный проект, для установки которого необходимо:
>- в запущенном проекте **Unreal Engine 5.2**, параметру `Full Rebuild` (располагается в разделе **"Packaging"** настроек `Project Settings`) присвоить значение **"Включён (True)"**;
>- закрыть проект **Unreal Engine 5.2**, и удалить временные папки **"Binaries"**, **"Build"**, **"DerivedDataCache"** и **"Intermediate"** из созданного проекта **Unreal Engine 5.2**;
>
>>По умолчанию созданный проект **Unreal Engine 5.2** располагается в следующей директории: 
>>
>>`C:\Users\Имя_Пользователя\Documents\Unreal Projects\Наименование_Проекта\Plugins`
>
>- cкопировать папки **"Carrot"** и **"CarrotEditor"** из **Carrot Unreal Engine Plugin** в папку **"Plugins"** проекта **Unreal Engine 5.2**.
>
>В случае, если папка с наименованием **"Plugins"** отсутствует в директории с проектом, необходимо её **создать**.
>
>Информацию об используемой версии плагина можно узнать в файле **"Rev.txt"** из папок **"Carrot"** и **"CarrotEditor"**.

3. Запустить созданный проект **Unreal Engine**, открыть раздел **Edit** и перейти в окно **"Plugins"**;

4. ![4.2.](..\images\UnrealEngine\Установка%20Carrot%20UEP\4.2.jpg)

Найти установленные плагины **"Carrot"** и **"CarrotEditor"** путём ввода в поисковую строку **"сarrot"**, и убедиться в том, что они включены.

>Для корректной работы плагина **"UEPlugin_5.3_206"** с **"Unreal Engine 5.3"**, необходимо дополнительно осуществить настройку проекта (`Project Settings...`) в части следующих параметров:
>- параметру `Screen Percentage Mode for Desktop renderer` раздела `Default Screen Percentage` присвоить значение `Manual`;
>- параметру `Default screen percentage mode for realtime editor viewports using desktop renderer` раздела `Viewport Resolution` присвоить значение `Manual`.

---

### Настройка проекта Unreal Engine 5

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

2. ![5.1.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.1.jpg)

Открыть окно создания уровней с помощью сочетания клавиш `Ctrl + N`, выбрать `Empty Level` и нажать кнопку `Create`.

3. Сохранить созданный уровень с помощью сочетания клавиш `Ctrl + S`, откроется окно **Save Level As**, в котором в строке `Name` ввести наименование сохраняемого уровня (в примере указывается **MainScene**) и нажать кнопку `Save`.

4. В разделе `Edit` перейти в настройки `Editor Preferences`, в строку поиска ввести наименование параметра **"Use Less CPU when in Background"** и отключить его.

5. В разделе `Edit` перейти в настройки `Project Settings` и проверить (в случае необходимости настроить) используя поисковую строку следующие параметры в соответствии с таблицей ниже:

| Наименование параметра | Значение параметра     |
|------------------------|------------------------|
| Custom TimeStep        | `CarrotCustomTimeStep` |

>Значение `CarrotCustomTimeStep` параметра **Custom TimeStep** позволяет обеспечить покадровую синхронизацию **Carrot** c трекинг данными и видеосигналом проекта **Unreal Engine**. С данным значением, количество FPS при работе с проектом **Unreal Engine** будет низким до момента его отображения в **Carrot Engine** и запуска в режиме **Play Mode**. Для увеличения количества FPS, на **время работы** с проектом **Unreal Engine**, рекомендуется параметру **Custom TimeStep** присвоить значение `None`, но после окончания работ, необходимо обратно установить значение `CarrotCustomTimeStep` .

|                            |                                                |
|----------------------------|------------------------------------------------|
| Game Viewport Client Class | `CarrotViewportClient`                         |
| Editor Startup Map         | `MainScene (Наименование сохранённого уровня)` |
| Game Default Map           | `MainScene (Наименование сохранённого уровня)` |
| Frame Buffer Pixel Format  | `8bit RGBA`                                    |
| Anti-Aliasing Method       | `Temporal Anti-Aliasing (TAA)`                 |

>В случае присвоения параметру **Anti-Aliasing Method** значения **Temporal Super-Resolution (TSR)**, возможна некорректная обработка отдельных графических элементов при взаимодействии с **Carrot**. 

|                                                                |                            |
|----------------------------------------------------------------|----------------------------|
| Custom Depth-Stencil Pass                                      | `Enabled with Stencil`     |
| Enable alpha channel support in post processing (experimental) | `Allow through tonemapper` |

6. ![5.2.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.2.jpg)

После настройки параметров и закрытия соответствующего окна, необходимо адаптировать рабочее пространство к отображению полного переченя рабочей информации, для этого в разделе `Window` добавить следующие окна представленные в таблице:

| Наименование окна | Назначение                                           |
|-------------------|------------------------------------------------------|
| `Outliner`        | Отображение всех используемых компонентов в проекте. |
| `Levels`          | Разграничение используемых компонентов по уровням.   |
| `Layers`          | Объединение компонентов в одну группу по слоям.      |

>В **Unreal Engine 5** имеется возможность включить интерфейс **Unreal Engine 4**, для этого необходимо перейти в раздел `Window`, выбрать `Load Layout` и **включить** параметр `UE4 Classic Layout`.

7. ![5.4.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.4.jpg)

![5.3.](..\images\UnrealEngine\Настройка%20Проекта%20Unreal%20Engine\5.3.jpg)

В результате адаптации рабочего пространства, следует также настроить:

- в окне **Outliner** нажать на кнопку `⚙` и включить параметр `Only in Current Level`;
- открыть окно **Content Drawer/Content Browser**, нажать кнопку `⚙ Settings` и отключить все параметры в разделе **Content**, кроме `Show Plugin Content`.

---

### Подготовка проекта Unreal Engine для работы с Carrot

Для подготовки проекта **Unreal Engine** к работе с **Carrot** необходимо:

1. ![6.1.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.1.jpg)

![6.2.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.2.jpg)

![6.3.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.3.jpg)

Добавить с помощью кнопки `Quickly add to the project` на сцену главного уровня следующие компоненты представленные в таблице:

| Наименование раздела | Наименование компонента | Количество |
|----------------------|-------------------------|------------|
| **Basic**            | `Actor`                 | 3 шт.      |
| **Cinematic**        | `Cine Camera Actor`     | 1 шт.      |
| **Volumes**          | `Post Process Volume`   | 1 шт.      |

2. ![6.4.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.4.jpg)

В окне **Outliner** выделить все добавленные компоненты, перейти в окно **Details** и в разделе настроек `Transform` сбросить параметр `Location` с помощью кнопки `Reset`.

3. ![6.5.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.5.jpg)

Сгруппировать, а затем переименовать (c помощью клавиши `F2` при выделении компонента) компоненты **CameraNull**, **CameraOffsets**, **CameraParent** и **CarrotCamera** путём их перемещения по следующей иерархической модели:

|Порядковый номер|Наименование компонента|Тип компонента|Назначение|
|-------------------|----------|----------|----------|
|1|**CameraNull**|`Actor`|Разграничение логики перемещения виртуальной камеры в проекте относительно других объектов. Используется для свободного перемещения камеры в пределах уровня.|
|2|**CameraOffsets**|`Actor`|Передача значений точек смещения (Offset: X, Y, Z. Rotation: Pan, Tilt, Roll) виртуальной камеры. Используется для точечного позиционирования в пределах уровня.|
|3|**CameraParent**|`Actor`|Приём значений точек смещения (Offset: X, Y, Z. Rotation: Pan, Tilt, Roll) камеры. Позволяет перемещать виртуальную камеру на основе полученных значений от трекинг системы камеры.|
|4|**CarrotCamera**|`CineCameraActor`|Приём технических характеристик камеры (фокусное расстояние, размер сенсора и т.п.). Позволяет присвоить принятые технические характеристики виртуальной камере.|

4. ![6.6.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.6.jpg)

Выбрать компонент **CarrotCamera**, перейти в окно **Details**, найти в разделе `Current Camera Settings` настройку `Lens Settings` и параметру `Min Focal Length` выставить значение `0.001mm`.

5. ![6.7.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.7.jpg)

![6.8.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.8.jpg)

Выбрать компонент **PostProcessVolume**, перейти в окно **Details**, перейти в раздел `Post Process Volume Settings` и включить настройку `Infinite Extent (Unbound)`, затем в разделе `Rendering Features` найти настройку `Post Process Materials` и **добавить** параметру `Array` **2 значения** с помощью кнопки `⊕`, а именно:

- **Значение № 1**: нажать `Choose`, выбрать `Asset reference` и присвоить используя поисковую строку значение `PostProcMat_Alpha`;

>Данное значение необходимо для реализации функционала работы **CustomStencil**.

- **Значение № 2**: нажать `Choose`, выбрать `Asset reference` и присвоить используя поисковую строку значение `PostProcMat_Frames`.

>Данное значение необходимо для синхронизации кадров между проектом **Unreal Engine** и **Carrot Engine**.

6. ![6.9.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.9.jpg)

С помощью элемента `List of world Blueprints available to the user for editing or creation` нажать на кнопку `Open Level Blueprint`.

>В результате проделанных действий откроется **система визуального программирования (Level Blueprint)**, где в окне **Event Graph** отобразятся следующие ноды (блоки распределения и обработки данных, действий, а также событий), представленные в таблице:
>
>![6.10.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.10.jpg)
>
>|Наименование ноды|Назначение|
>|-------------------|----------|
>|`Event BeginPlay`|Однократная активация события при запуске уровня.|
>|`Event Tick`|Покадровая активация события.|

7. ![6.11.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.11.jpg)

Из точки выхода ноды `Event BeginPlay` проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

8. ![6.12.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.12.jpg)

В появившемся окне **Executable actions** с помощью поисковой строки найти ноду `Carrot Macro` и добавить её.

9. ![6.13.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.13.jpg)

Из проекта **Unreal Engine** переместить компоненты **CameraOffsets**, **CameraParent** и **CarrotCamera** в окно **Level Blueprint**, затем соединить все добавленные ноды с **Carrot Macro** в следующем порядке:
- ноду `Event Tick` с точкой входа `Event Tick`;
- ноду `CameraOffsets` с точкой входа `Tracking Offsets`;
- ноду `CameraParent` с точкой входа `Camera Parent`;
- ноду `CarrotCamera` с точкой входа `Cine Camera`;

10. ![6.14.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.14.jpg)

Из точки выхода `Command Loop` ноды `Carrot Macro` проложить связь в свободное пространство окна **Level Blueprint**, в открывшемся окне с помощью поисковой строки найти ноду `Switch on String`, затем соединить точку выхода `Command` ноды `Carrot Macro` с точкой входа `Selection` у ноды `Switch on String`.

11. ![6.15.](..\images\UnrealEngine\Подготовка%20Проекта%20UE\6.15.jpg)

В ноде `Switch on String` с помощью команды `Add pin ⊕` создаём требуемое количество строк (ивентов). В качестве **примера** будут рассматриваться **5 строк (ивентов)**, представленные в таблице ниже.

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

---

### Создание RTT 

**Render Target Texture (RTT)** - представляет из себя текстуру, в которую возможна передача медиа в режиме реального времени.

>![7.1.](..\images\UnrealEngine\Создание%20RTT\7.1.jpg)
>
>**RTT** возможно применить к любому объекту и материалу. В телеиндустрии наиболее распространено использование **RTT** в качестве имитации **плазменных панелей**.

Для создаания **RTT** необходимо:

1. ![7.2.](..\images\UnrealEngine\Создание%20RTT\7.2.jpg)

Нажать в пустом месте окна **Content Drawer/Content Browser** `правую кнопку мыши (ПКМ)`, перейти в раздел `Texture` и выбрать объект `Render Target` задав ему имя (в качестве примера, используется имя объекта **RTT_01**).

>Количество используемых **Render Target** в проекте должно совпадать с количеством отображаемых изображений (видео-материалов). 

2. ![7.3.](..\images\UnrealEngine\Создание%20RTT\7.3.jpg)

**Открыть окно редактирования** созданного **RTT** объекта (**RTT_01**) используя двойное нажатие `левой кнопки мыши (ЛКМ)` на нём, перейти в окно **Details** и **присвоить** параметрам следующие значения представленные в таблице.

| Наименование параметра | Значение параметра |
|------------------------|--------------------|
| Min Gen Settings       | `NoMipmaps`        |
| Size X                 | `2048`             |
| Size Y                 | `2048`             |

>Значение параметров **Size X** и **Size Y** необходимо присваивать в соответствии с принимаемым разрешением сигнала.
>
>Пример: 
>- если планируется приём SDI сигнала с разрешением **1920х1080**, значение параметров **Size X** и **Size Y** необходимо выставить `1920` и `1080` соответственно;
>- если планируется приём шаблона After Effects c разрешением **2547х782**, значение параметров **Size X** и **Size Y** необходимо выставить `2547` и `782` соответственно.
>
>В случае присвоения некорректных значений параметрам **Size X** и **Size Y** возможен сбой отображения принимаемого сигнала. 

|                      |             |
|----------------------|-------------|
| Address X            | `Clamp`     |
| Address Y            | `Clamp`     |
| Render Target Format | `RTF RGBA8` |

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

4. ![7.4.](..\images\UnrealEngine\Создание%20RTT\7.4.png)

С помощью элемента `List of world Blueprints available to the user for editing or creation` открыть окно **Level Blueprint** путём нажатия на кнопку `Open Level Blueprint`.

>Далее рассматривается пример с учётом созданной ранее схемы  в **Level Blueprint** из раздела **Подготовка проекта Unreal Engine для работы с Carrot**

5. ![7.5.](..\images\UnrealEngine\Создание%20RTT\7.5.jpg)

Из точки выхода **Begin Play Out** ноды **Carrot Масrо** проложить связь (используя `левую кнопку мыши (ЛКМ)`) в свободное пространство окна **Level Blueprint**.

6. В появившемся окне **Executable actions** с помощью поисковой строки найти ноду `Carrot Reciever` и добавить её.

7. ![7.6.](..\images\UnrealEngine\Создание%20RTT\7.6.jpg)

В параметре `Texture Render Targer 2D` ноды `Carrot Reciever` выбрать созданный **RTT** (**RTT_01**), **запустить** процесс компиляции с помощью кнопки `Compile`, **нажать** кнопку `🖫` (`Save`) и закрыть окно **Level Blueprint**.

8. ![7.7.](..\images\UnrealEngine\Создание%20RTT\7.7.jpg)

Нажать на кнопку `Quickly add to the project`, перейти в раздел `Shapes` и добавить элемент `Plane (Плоскость)` напротив компонента **CarrotCamera**.

9. Открыть окно **Details** элемента `Plane` путём нажатия на него `левой кнопки мыши (ЛКМ)`, перейти в раздел `Materials` и параметру `Element 0` выбрать созданный **RTT** объект (**RTT_01**).

---

### Экспорт шаблона из проекта Unreal Engine 5

Экспорт шаблонов необходим для сохранения заготовленных проектов **Unreal Engine** в формате, позволяющему воспроизводить их Carrot Engine. Заготовленные шаблоны запускаются из Web Playlist (Carrot Dashboard).

>Перед экспортом шаблона необходимо запустить приложение `Carrot Server`.

![8.1.](..\images\UnrealEngine\Экспорт%20Шаблона%20UE\8.1.jpg)

Для экспорта шаблона из проекта **Unreal Engine** необходимо:

- нажать на кнопку **Export As Carrot Template** (1);

- в открывшемся окне **Template Preview** нажать кнопку `🖫` (`Save`) (2);

- откроется окно **Templates**, в котором необходимо присвоить имя экспортируемого шаблона в окне **Name** (в качестве примера, используется имя `MyProject`) и нажать на поле `Container` (3);

- в открывшемся окне выбрать **схему Carrot Engine** для запуска шаблонов **Unreal Engine** (4);

- отметить необходимый контейнер из списка доступных (5);

>В случае, если список доступных контейнеров отсутствует, необходимо убедиться в корректном составлении **схемы Carrot Engine** в приложении **Carrot** - **System Monitor**.

- нажать кнопку `ОК` (6);

- нажать кнопку `Save Template` в окне **Templates** (7).

---

### Создание ивентов Unreal Engine 5 в Web Playlist (Carrot Dashboard)

![9.1.](..\images\UnrealEngine\Создание%20Ивентов%20UE\9.1.jpg)

Для создания ивента **Unreal Engine** необходимо:

- открыть **окно "Editor"** (1);

- открыть **Template Manager** (2);

- выбрать экспортированный шаблон **Unreal Engine** `правой кнопкой мыши (ПКМ)` и нажать кнопку `Generate Events` (3);

- убедиться, что **Playlist** заполнился ивентами, указанными ранее в окне **Level Blueprint** у ноды **Switch on String** (`START`, `SHOW`, `HIDE`, `PLAY` и `RESET`) (4).

---

### Запуск ивента Unreal Engine 5

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

---

### Создание и экспортирование переменных Carrot Variables

Одной из функциональных возможностей **Carrot** является изменение свойств объекта **Unreal Engine** при запущенном шаблоне (ивенте) в режиме реального времени. Для реализации данного функционала используются **Carrot Variables (переменные)**.

**Carrot Variables** включает в себя типы данных представленные в таблице ниже.

|Наименование переменной|Тип данных|Назначение|
|-------------------|----------|----------|
|`Carrot Get Boolean Variable`|Логический (Boolean).|Включение или отключение какого-либо события.|
|`Carrot Get Color Variable`|Число с плавающей точкой (Float)|Изменение цветовых значений по палитре **RGBA**. Пример: `R = 0,5`; `G = 0,5`; `B = 0,5`; `A = 1;`|
|`Carrot Get Text Variable`|Строковый (String).|Изменение тектовой информации.|
|`Carrot Get Float Variable`|Число с плавающей точкой (Float).|Изменение числового значения.|
|`Carrot Get Vector 2DVariable`|Число с плавающей точкой (Float).|Перемещение объекта в 2D пространстве по осям X, Y.|
|`Carrot Get Vector 3DVariable`|Число с плавающей точкой (Float).|Перемещение объекта в 3D пространстве по осям X, Y, Z.|

**Carrot Variables** доступны в системе визуального программирования (Level Blueprint).

>Перед использованием **Carrot Variables** необходимо убедиться, что установлен плагин **Carrot Unreal Engine Plugin**. Процесс установки плагина изложен в соответствующем [**разделе**](https://carrotsoftware.github.io/docs/0000/#/WorkUE5?id=%d0%a3%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0-carrot-unreal-engine-plugin).

Для использования **Carrot Variables** необходимо:

![11.1.](..\images\UnrealEngine\Создание%20и%20Экспортирование%20Carrot%20Variables\11.1.jpg)

1. С помощью элемента `List of world Blueprints available to the user for editing or creation` нажать на кнопку `Open Level Blueprint`.

2. Создать типовую схему взаимодействия **Unreal Engine** с **Carrot** с использованием следующих нод `Event BeginPlay`, `Event Tick` и `Carrot Macro`.

>Процесс создания типовой схемы взаимодействия **Unreal Engine** с **Carrot** изложен в разделе [**"Подготовка проекта Unreal Engine для работы с Carrot"**](https://carrotsoftware.github.io/docs/0000/#/WorkUE5?id=%d0%9f%d0%be%d0%b4%d0%b3%d0%be%d1%82%d0%be%d0%b2%d0%ba%d0%b0-%d0%bf%d1%80%d0%be%d0%b5%d0%ba%d1%82%d0%b0-unreal-engine-%d0%b4%d0%bb%d1%8f-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b-%d1%81-carrot).

![11.2.](..\images\UnrealEngine\Создание%20и%20Экспортирование%20Carrot%20Variables\11.2.jpg)

3. Из точки выхода `Command` ноды `Carrot Macro` проложить связь в свободное пространство окна **Level Blueprint** и в открывшемся окне выбрать `Promote to variable`, затем соединить точку выхода `Command Loop` ноды `Carrot Macro` с точкой входа добавленной ноды `SET`.

>По результатам проделанных действий будет добавлена нода `SET` с переменной `Command`. В случае необходимости, при выделении ноды (используя `левую кнопку мыши (ЛКМ)`) обратившись к параметру `Variable Name` в разделе `Variable` окна **Details**, имеется возможность её переименования (в дальнейшем, в качестве примера будет использоваться переменная с наименованием `JSON Command`).

4. Аналогичным образом необходимо создать ноду `Sequence` из точки выхода `⏵` ноды `SET`, затем из точки выхода `Then 0` создать ноду `Switch on String` и из точки выхода `Then 1` создать одну из нод **Carrot Variables**, а затем создать другие из её точки выхода `Оutput Flow` в соответствии с рисунком.

>В качестве примера, в ноде `Switch on String` используется перечень строк (ивентов) из **шага 11** раздела [**"Подготовка проекта Unreal Engine для работы с Carrot"**](https://carrotsoftware.github.io/docs/0000/#/WorkUE5?id=%d0%9f%d0%be%d0%b4%d0%b3%d0%be%d1%82%d0%be%d0%b2%d0%ba%d0%b0-%d0%bf%d1%80%d0%be%d0%b5%d0%ba%d1%82%d0%b0-unreal-engine-%d0%b4%d0%bb%d1%8f-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b-%d1%81-carrot).
>
>Также, в качестве демонстрационного варианта в окне **Content Drawer/Content Browser** был заранее создан **классовый блупринт (Class Blueprint)** объекта `Actor` с наименованием `VariableTest`, который далее был добавлен в уровень (в качестве объекта `Actor`) и **Level Blueprint**. В том числе была добавлена функция с наименованием `Func Var Text`, включающая в себя перечень переменных (точек входа) **Unreal Engine** в соответствии с добавленными нодами **Carrot Variables** и соединённая . 
>
>Для удобства работы, рекомендуется добавить ноду, которая будет дублировать переменную `JSON Command (Используется в примере)` ноды `SET`. Для этого, в свободном пространстве окна **Level Blueprint** необходимо нажать `правую кнопку мыши (ПКМ)`, в открывшемся окне обратиться к поисковой строке, ввести `JSON Command (Используется в примере)` и выбрать ноду `Get JSON Command (Используется в примере)`. Далее добавленную ноду необходимо соединить с точкой входа `Command` добавленных нод **Carrot Variables**.

![11.3.](..\images\UnrealEngine\Создание%20и%20Экспортирование%20Carrot%20Variables\11.3.jpg)

5. После создания схемы в **Level Blueprint** с применением **Carrot Variables** необходимо:
- присвоить имя переменным в нодах **Carrot Variables** (1);

>Каждая нода **Carrot Variables** имеет точку входа `Variable Name`, которая содержит информацию об имени переменной (в дальнейшем используется в Web Playlist (Carrot Dashboard)). Изменение имени переменной происходит в соответствующем окне точки входа `Variable Name`.

- произвести экспорт созданных переменных с помощью кнопки **Export As Carrot Template** в основном рабочем пространстве (окне) **Unreal Engine** (2);
- в открывшемся окне **Template Preview** нажать кнопку `≡` окна **Variables** и добавить переменные (3);
- выбрать одну из добавленных переменных (в качестве примера используется переменная `Switch`), перейти в окно **Properties** и изменить в поле **Name** раздела **Variable** наименование переменной в соответствии с используемым наименованием точки входа `Variable Name` ноды **Carrot Variables** (4);
- нажать кнопку `🖫` (`Save`) и произвести экспорт шаблона (5).

>Ознакомиться с процессом экспорта шаблона можно в соответствующем [**разделе**](https://carrotsoftware.github.io/docs/0000/#/WorkUE5?id=%d0%ad%d0%ba%d1%81%d0%bf%d0%be%d1%80%d1%82-%d1%88%d0%b0%d0%b1%d0%bb%d0%be%d0%bd%d0%b0-%d0%b8%d0%b7-%d0%bf%d1%80%d0%be%d0%b5%d0%ba%d1%82%d0%b0-unreal-engine).

![11.4.](..\images\UnrealEngine\Создание%20и%20Экспортирование%20Carrot%20Variables\11.4.jpg)

6. В результате экспорта шаблона, необходимо открыть **Web Playlist (Carrot Dashboard)**, перейти в **окно Settings**, обратиться к разделу **Global settings** и включить параметр `Send non-saved active Event Changes to Engine`.

>Ознакомиться с назначением параметров **Web Playlist (Carrot Dashboard)** возможно в соответствующем [**разделе**](https://carrotsoftware.github.io/docs/0000/#/WebPlaylist?id=_5-%d0%9e%d0%ba%d0%bd%d0%be-quotsettingsquot).

7. Создать (в случае необходимости) ивент **Unreal Engine**.

>С процессом создания ивентов **Unreal Engine** в **Web Playlist (Carrot Dashboard)** можно ознакомиться в соответствующем [**разделе**](https://carrotsoftware.github.io/docs/0000/#/WorkUE5?id=%d0%a1%d0%be%d0%b7%d0%b4%d0%b0%d0%bd%d0%b8%d0%b5-%d0%b8%d0%b2%d0%b5%d0%bd%d1%82%d0%be%d0%b2-unreal-engine-%d0%b2-web-playlist-carrot-dashboard).

![11.5.](..\images\UnrealEngine\Создание%20и%20Экспортирование%20Carrot%20Variables\11.5.jpg)

8. Открыть **окно Editor**, выбрать один из добавленных ивентов (в примере используется ивент с именем `SHOW`), включить режим редактирования переменных `Allow Runtime Change` в разделе **Event Properties**  и нажать кнопку `Apply`.

>Работа параметра `Send non-saved active Event Changes to Engine` осуществляется при включённом режиме редактирования переменных `Allow Runtime Change`.

9. В разделе **Event Properties** отобразится перечень **Carrot Variables**, позволяющих изменять свойства объекта при запущенном шаблоне (ивенте) с помощью их параметров.

>В случае изменения значений параметров **Carrot Variables**, необходимо нажать кнопку `Apply` для их применения на объекте.




