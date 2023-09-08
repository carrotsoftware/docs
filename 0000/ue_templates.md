# Работа с UE шаблонами.

## Шаг 1. Установка Carrot UE4 Plugin.

**UE4 Plugin** устанавливается на тех рабочих станциях, на которых установлен **Unreal Engine 4** и которые предполагается использовать для экспорта шаблонов на **Carrot Server**.

**UE плагины:**
|Ревизия Carrot           |Версия плагина UE4                           |Версия плагина UE5       |
|:------------------------|:--------------------------------------------|:------------------------|
|3258-3795                |UEPlugin4.27_3.1.0_RC_9_64_(no_cycle)        |Не поддерживается        |
|3796-4216                |UEPlugin4.27_3.1.0_RC_11_108 (UEviewportSync)||
|                         |UEPlugin4.27_3.1.0_RC_11_126 (UEviewportSync)|UEPlugin5.1_5.0_RC_16_126|
|                         |UEPlugin4.27_3.1.0_RC_16_153 (UEviewportSync) (макрос не трогает параметры камеры) (добавлена возможность обработки нескольких трекинг сообщений от разных трекинг систем)| UEPlugin5.1_5.0_RC_21_153 (PluginDev_05) (макрос не трогает параметры камеры) (возможность использования очереди из кадров) (добавлена возможность обработки нескольких трекинг сообщений от разных трекинг систем)|
|4217-по актуальную версию|UEPlugin4.27_3.1.0_RC_17_157 (UEviewportSync) (в макросе возвращена бегущая строка для синхронизации с UE)| UEPlugin5.1_5.0_RC_22_160 (PluginDev_05) (в макросе возвращена бегущая строка для синхронизации с UE)|

---
---

Для установки **Carrot UE4 Plugin** необходимо выполнить следующее:

- Скопируйте папку **CarrotEditor** в директорию `C:\Program Files\Epic Games\UE_4.26\Engine\Plugins\VirtualProduction`

![UE Plugin](..\images\image78.png)

### Установка Carrot UE4 Plugin в проект

**Carrot Plugin** устанавливается в проект.

Для установки **Carrot UE4 Plugin** в проект необходимо выполнить следующее:

- Создайте в корне проекта папку `Plugins` и скопируйте в неё папку `Carrot` 
>В директорию с проектом `Unreal Projects\UE_car_NTV\plugins\Carrot`

![UE Plugin](..\images\image150.png)

## Шаг 2. Настройка UE4 Plugin.

Для настройки **Carrot UE4 Plugin** необходимо выполнить следующее:

1. В программе **UE4** открыть окно настройки `Plugins`

   ![](..\images\image115.jpg)

2. В общем списке выбрать `Carrot` и `CarrotEditor`

   ![](..\images\image10.png)

3. Перезапустить проект **UE**.

## Шаг 3.1. Настройка UE проекта (новый плагин, цветная полоска).

Для подготовки проекта к экспорту шаблона необходимо выполнить следующее:

1. В дополнение к основным настройкам в проекте, в папке Config в файле DefaultEngine и в папке Windows в файле WindowsEngine необходимо добавить строки:

```text
[/Script/Engine.Engine]
GameEngine=/Script/Carrot.CarrotGameEngine
GameViewportClientClassName=/Script/Carrot.CarrotViewportClient
```

2. В разделе `Editor` - `General` - `Performance` выключите параметр `Use Less CPU when in Background`.

   ![](..\images\image183.png)

3. В разделе `Project` - `Engine` - `General Settings` в параметре `Game Viewport Client Class` выберите `CarrotViewportClient`.

   ![](..\images\image184.png)

4. Запустите проект, который необходимо экспортировать, включите плагины `Carrot` и `CarrotEditor` и перезапустите проект:

   ![](..\images\image10.png)

5. В разделе `Project` - `Maps & Modes` - `Default Maps` в параметрах `Editor Startup Map` и `Game Default Map` укажите ту сцену, которую предполагается использовать.

   ![](..\images\image143.png)

6. В настройках проекта в разделе `Engine` - `General Settings` - `Framerate` укажите:

- в поле `Custom TimeStep` укажите `CarrotCustomTimeStep`

  ![](..\images\image79.png)

4. Если в проекте используются анимации

5. В разделе `Engine` - `Rendering` - `Default Settings` - `Anti-Aliasing Method` выбрать `TemporalAA`.

   ![](..\images\image141.png)

6. В настройках проекта в разделе `Engine` - `Rendering` - `Postprocessing` установите параметры, указанные ниже:

   ![](..\images\image169.png)

7. В настройках проекта в разделе `Engine` - `Rendering` - `Default Settings` установите параметр `Frame Buffer Pixel Format` равным `8bit RGBA`:

   ![](..\images\image186.png)

8. Добавьте в сцену `Empty Actor` - этот объект будет отвечать за смещения координат, получаемых от **Carrot Tracking Server**.

   ![](..\images\image126.png)

9. Добавьте в сцену `Cine Camera Actor` - этот объект будет выполнять роль виртуальной камеры

   ![](..\images\image53.png)

10. Сделайте `Empty Actor` родительским объектом по отношению к `Cine Camera Actor`

    ![](..\images\image32.png)

11. Откройте свойства `Cine Camera Actor` и в разделе `Current Camera Settings` - `Lens Settings` установите параметр `Min Focal Length` равным 0 мм.

    ![](..\images\image190.png)

12. Добавьте в сцену `Post Process Volume`

    ![](..\images\image189.png)

13. Скопируйте ассет `PostProcMat_Frames.uasset`, `PostProcMat_Alpha.uasset` и `CarrotMacroLibrary.uasset` в папку проекта

14. В `Post Process Volume` - `Rendering Features` добавьте элементы и укажите пути на ассеты `PostProcMat_Alpha` и `PostProcMat_Frames` которые былы скопированы с плагином `Carrot`.

    ![](..\images\image187.png)

15. Также активируйте параметр `Infinite Extent (Unbound)`.

    ![](..\images\image188.png)

16. Если планируется завести изображение внутрь проекта, то создайте еще одну `Render Target` - эта текстура будет использоваться для ввода изображения. Таких текстур может быть несколько.

    ![](..\images\image66.png)

17. Настройки данной текстуры приведите в соответствие с указанными ниже:

    ![](..\images\image59.png)

    > Примечание: разрешение текстуры должно быть квадратным и кратным степени двойки (например, 256х256, 512х512, 2048х2048), а также близким с разрешением вьюпорта, с которого будет забираться изображение (см. 4.3 Создание схемы работы Carrot Engine)
    >
    > ![](..\images\image111.png)
    >
    > Если четкости входящей текстуры недостаточно - поставить `NoMipmaps`. В остальных случаях следует выбирать `Sharpen`.

18. Создайте материал, который будет использовать созданную `Render Target`:

    ![](..\images\image24.png)

19. Откройте настройки материала и задайте ему созданную текстуру:

    ![](..\images\image21.png)

20. Примените созданный материал на объект, на котором планируется отображать входящее изображение:

    ![](..\images\image171.png)

21. Откройте `Level Blueprint` и добавьте `Carrot Macro`.

    ![](..\images\image52.png)

22. Во входных параметрах `Carrot Macro` укажите:

    ![](..\images\image194.png)

    - `Event BeginPlay`
    - `Event Tick`
    - Объект `Cine Camera Actor`, используемый в качестве виртуальной камеры.
    - Объект `Empty Actor`, который является родительским по отношению к `Cine Camera Actor`.

    К выводу макроса `Event Tick Out` (или `Begin Play Out` **при использовании нового типа синхронизации**) добавьте ноду `Carrot Receiver` и укажите в ней текстуру:

    ![](..\images\image203.png)

    Если используется несколько текстур, необходимо скопировать ноду `Carrot Receiver` столько раз, сколько будет использоваться таких текстур.

    ![](..\images\image202.png)

    Если подобные текстуры вообще не используются, необходимо исключить ноду `Carrot Receiver` из процесса:

    ![](..\images\image204.png)

23. Используйте выходные пины `Begin Play Out` и `Event Tick Out`, если ивенты `Begin Play` и `Event Tick` будут использоваться после `Carrot Macro`:

    ![](..\images\image194.png)

24. Если проигрывание шаблона проекта подразумевает использование команд, то:

    - Создайте ноду `Switch on String` и соедините её с Carrot Macro.
    - Каждый выходной пин ноды `Switch on String` будет соответствовать команде, которую можно будет отправлять с `Carrot Playlist`.

    ![](..\images\image196.png)

Соедините выходные пины ноды `Switch on String` с теми событиями, которые должны выполниться при вызове команды, чьё имя соответствует имени пина.

## Шаг 3.2. Настройка UE проекта (старый плагин, бегающая белая полоска).

Для подготовки проекта к экспорту шаблона необходимо выполнить следующее:

1. Запустите проект, который необходимо экспортировать, включите плагины `Carrot` и `CarrotEditor` и перезапустите проект:

   ![](..\images\image10.png)

2. В разделе `Project` - `Maps & Modes` - `Default Maps` в параметрах `Editor Startup Map` и `Game Default Map` укажите ту сцену, которую предполагается использовать.

   ![](..\images\image143.png)

3. В настройках проекта в разделе `Engine` - `General Settings` - `Framerate` - `Custom TimeStep` укажите `CarrotCustomTimeStep`:

   ![](..\images\image79.png)

4. В разделе `Engine` - `Rendering` - `Default Settings` - `Anti-Aliasing Method` выбрать `TemporalAA`.

   ![](..\images\image141.png)

5. В настройках проекта в разделе `Engine` - `Rendering` - `Postprocessing` установите параметры, указанные ниже:

   ![](..\images\image169.png)

6. В настройках проекта в разделе `Engine` - `Rendering` - `Default Settings` установите параметр `Frame Buffer Pixel Format` равным `Float RGBA`:

   ![](..\images\image106.png)

7. Добавьте в сцену `Empty Actor` - этот объект будет отвечать за смещения координат, получаемых от **Carrot Tracking Server**.

   ![](..\images\image126.png)

8. Добавьте в сцену `Cine Camera Actor` - этот объект будет выполнять роль виртуальной камеры

   ![](..\images\image53.png)

9. Сделайте `Empty Actor` родительским объектом по отношению к `Cine Camera Actor`

   ![](..\images\image32.png)

10. Откройте свойства `Cine Camera Actor` и в разделе `Current Camera Settings` - `Lens Settings` установите параметр `Min Focal Length` равным 0 мм.

    ![](..\images\image76.png)

11. Выберите компонент `CameraComponent` и добавьте к нему компонент `SceneCaptureComponent2D`.

    ![](..\images\image86.png)

12. Создайте `Render Target` - эта текстура будет использоваться для вывода изображения.

    ![](..\images\image66.png)

13. Настройки данной текстуры приведите в соответствие с указанными ниже:

    ![](..\images\image178.png)

    > Примечание: разрешение текстуры должно совпадать с разрешением вьюпорта, на котором она будет проигрываться (см. 4.3 Создание схемы работы Carrot Engine)

14. Скопируйте ассет `PostProcMat_Frames.uasset`, `PostProcMat_Alpha.uasset` и `CarrotMacroLibrary.uasset` в папку проекта

    ![](..\images\image179.png)
    ![](..\images\image85.png)

15. Откройте настройки компонента `SceneCaptureComponent2D` объекта `Cine Camera Actor` и установите параметры:

    ![](..\images\image146.png)

    - `Texture Target` - выберите ту `Render Target`, которую Вы создали для вывода изображения.
    - `Primitive Render Mode` - выберите `Render Scene Primitives`.
    - `Capture Source` - `Final Color (LDR) in RGB`.
    - `Capture Every Frame` - отключено.
    - `Capture on Movement` - отключено.
    - `Always Persist Rendering State` - включено.
    - `Temporal AA` - включено.

      ![](..\images\image148.png)

16. В разделе `Post Process Volume` - `Rendering Features` добавьте элементы и укажите пути на ассеты `PostProcMat_Alpha` и `PostProcMat_Frames` которые былы скопированы с плагином `Carrot`.

    ![](..\images\image60.png)

17. Если планируется завести изображение внутрь проекта, то создайте еще одну `Render Target` - эта текстура будет использоваться для ввода изображения. Таких текстур может быть несколько.

    ![](..\images\image66.png)

18. Настройки данной текстуры приведите в соответствие с указанными ниже:

    ![](..\images\image59.png)

    > Примечание: разрешение текстуры должно квадратным и кратным степени двойки (например, 256х256, 512х512, 2048х2048), а также близким с разрешением вьюпорта, с которого будет забираться изображение (см. 4.3 Создание схемы работы Carrot Engine)
    >
    > ![](..\images\image111.png)
    >
    > Если четкости входящей текстуры недостаточно - поставить `NoMipmaps`. В остальных случаях следует выбирать `Sharpen`.

19. Создайте материал, который будет использовать созданную `Render Target`:

    ![](..\images\image24.png)

20. Откройте настройки материала и задайте ему созданную текстуру:

    ![](..\images\image21.png)

21. Примените созданный материал на объект, на котором планируется отображать входящее изображение:

    ![](..\images\image171.png)

22. Откройте `Level Blueprint` и добавьте `Carrot Macro`.

    ![](..\images\image52.png)

23. Во входных параметрах `Carrot Macro` укажите:

    ![](..\images\image33.png)

    - `Event BeginPlay`
    - `Event Tick`
    - Объект `Cine Camera Actor`, используемый в качестве виртуальной камеры.
    - Объект `Empty Actor`, который является родительским по отношению к `Cine Camera Actor`.
    - `Input Render Target 2D` - указывается текстура, которая используется для ввода изображения.
    - `Output Render Target 2D` - указывается текстура, которая используется для вывода изображения.

    Если используется несколько текстур для входящих изображений, раскройте макрос:

    ![](..\images\image149.png)

    Необходимо скопировать ноду `Carrot Receiver` столько раз, сколько будет использоваться таких текстур.

    Причем первая текстура указывается в макросе, а последующие указываются в копиях ноды:

    ![](..\images\image101.png)

    Если подобные текстуры вообще не используются, необходимо исключить ноду `Carrot Receiver` из процесса:

    ![](..\images\image147.png)

24. Используйте выходные пины `Begin Play Out` и `Event Tick Out`, если ивенты `Begin Play` и `Event Tick` будут использоваться после `Carrot Macro`:

    ![](..\images\image33.png)

25. Если проигрывание шаблона проекта подразумевает использование команд, то:
    - Создайте ноду `Switch on String` и соедините её с Carrot Macro, как показано на рисунке выше.
    - Каждый выходной пин ноды `Switch on String` будет соответствовать команде, которую можно будет отправлять с `Carrot Playlist`.

Соедините выходные пины ноды `Switch on String` с теми событиями, которые должны выполниться при вызове команды, чьё имя соответствует имени пина.

26. В разделе `Editor` - `General` - `Performance` выключите параметр `Use Less CPU when in Background`.

    ![](..\images\image183.png)


## Шаг 4. Экспорт шаблона из проекта UE4.

Для экспорта шаблона из проекта UE4 необходимо выполнить следующее:

1. Нажмите кнопку `Export Carrot` (расположена на верхней панели):

   ![](..\images\image35.png)

2. Откроется окно `Carrot Objects`:

   ![](..\images\image160.png)

   В данном окне будут отображаться только те объекты проекта, которые будут использоваться для интеграции с **ПО Carrot**:

   - Текстуры для входных изображений;
   - Текстура выходного изображения;
   - Список команд.

3. Выберите режим сохранения шаблона:

   ![](..\images\image195.png)

   `Unreal Editor` - сохранится только шаблон проекта. Данный режим используется, когда запуск проекта происходит посредством `Unreal Editor`.
   `Already Packed Project` - указывается путь к уже собранному проекту. Происходит его упаковка и сохранение в **Carrot Server** вместе с шаблоном. Данный режим используется, когда нужен запуск собранного проекта.

4. Нажмите кнопку сохранения и выберите директорию сохранения:

   ![](..\images\image77.png)

5. В поле `Name` введите желаемое имя шаблона и нажмите `Save Template`.

6. Закройте окно `Carrot Objects`:

   ![](..\images\image88.png)

   > Примечание:
   >
   > - при запуске собранного проекта его окно должно быть развернуто;
   > - при запуске сцены из-под `UE Editor` окно сцены должно быть развернуто, а окно `UE Editor` должно быть свернуто.
