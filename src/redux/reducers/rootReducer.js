import ImageGameDesigner from "../../images/GameDesigner.jpg"
import ImageGreetGy from "../../images/ReverendInsanity.jpg"
import ImageLegendaryMechanic from "../../images/LegMex.jpg"
import ImageThreeDays from "../../images/ThreeDays.jpg"
import ImageWorldOnline from "../../images/WorldOnline.jpg"
import ImageAsura from "../../images/Asura.jpg"
import ImageMonsterParadise from "../../images/MonsterParadise.jpg"
import ImageDragon from "../../images/Dragon.jpg"
import AgainstTheGods from "../../images/AgainstTheGods.png"
import Mag from "../../images/Mag.png"
import {
    BLACK_THEME,
    BLOG_ID,
    IS_SEARCH_BOX_ACTIVE,
    MENU,
    RESET_SEARCH_BOX_VALUE,
    SEARCH_BOX_VALUE
} from "../actions/actionTypes"

const initialState = {
    blackTheme: true,
    searchBoxValue: "", // search box value
    isSearchBox: false, // search box active or not
    menu: false, // for drawer
    blogId: 0,
    novels: [
        {
            name: "Рай монстров",
            author: "Nuclear Warhead Cooked in Wine",
            description: "800 лет назад, 3 000 пространственных врат открылись по всему миру. Как будто 3 000 разноцветных глаз открылись и монстры хлынули из них, словно слёзы. Некоторые могли одним ударом уничтожить городские стены, тела их были гигантские и питались они людьми. Некоторые крепились к людям, вытягивали из них питательные вещества и порабощали их. Некоторые проникали в города, маскируясь под обычных жителей, в то время как питались они человеческой кровью, чтобы поддерживать свою жизнь.\n" +
                "\n" +
                "В одну ночь человеческая раса упала на дно пищевой цепи, и мир превратился в рай для монстров...",
            image: ImageMonsterParadise,
            likes: 0,
            dislikes: 0,
            rating: 4.4,
            views: 77,
            chapters: [
                {
                    id: 1,
                    title: "Да какой прок от смазливого лица?!",
                    text: "[Серийный номер реинкарнации: 142857]\n" +
                        "\n" +
                        "[Имя реинкарнации: Линь Хуан]\n" +
                        "\n" +
                        "[Пол: Мужской]\n" +
                        "\n" +
                        "[Возраст предыдущей реинкарнации: 25]\n" +
                        "\n" +
                        "[Возраст текущей реинкарнации: 15]\n" +
                        "\n" +
                        "[Стартовый мир реинкарнации: Рай Монстров]\n" +
                        "\n" +
                        "[Настройка реинкарнации: Линь Хуан; Мужчина; 15; имеет 13-летнюю сестру Линь Синь, существование которой зависит от него; Разрушенное внутреннее колесо жизни; Расход Праны 1 000%; Оставшаяся продолжительность жизни: 91 день]\n" +
                        "\n" +
                        "[Слияние памяти реинкарнации: 98%]\n" +
                        "\n" +
                        "[Количество трансмиграций: 1]\n" +
                        "\n" +
                        "[Статус благословения: не активирован]\n" +
                        "\n" +
                        "Линь Хуан стеклянными глазами смотрел на полупрозрачный интерфейс. Несмотря на то, что он уже не первый раз на этой неделе открывал это меню, он всё равно продолжал удивляться.\n" +
                        "\n" +
                        "Прошла неделя с тех пор, как Линь Хуан переместился в 15-летнего подростка. Предыдущий владелец был одарённым и был лучшим учеником в Колледже Охотников. Все тесты он практически всегда сдавал на пятёрки, но, к сожалению, у него был фатальный недостаток – его Колесо Жизни было разрушено с самого рождения.\n" +
                        "\n" +
                        "Большая трещина в каменистой поверхности Колеса практически раскалывала его напополам. Из 360 секций его Колеса, только 3 всё ещё светились и 3-я секция постепенно этот свет теряла.\n" +
                        "\n" +
                        "Для нормального человека, количества Праны в 3-х секциях хватало на 3 года жизни. Однако с учётом 1 000% потребления Праны Линь Хуана, жить ему оставалось 3 месяца.\n" +
                        "\n" +
                        "– Ну я хотя бы стал симпатичнее, если сравнивать с прошлой реинкарнацией. – сдержано отметил Линь Хуан, смотря в зеркало.\n" +
                        "\n" +
                        "Нежный, симпатичный подросток с короткой многослойной причёской отражался в зеркале и парой чистых чёрных глаз он смотрел оттуда на Линь Хуана.\n" +
                        "\n" +
                        "– Да какой прок от этого смазливого лица?! – в гневе сжав кулаки, закричал в пустоту Линь Хуан.\n" +
                        "\n" +
                        "– Я конечно благодарен за предоставленное мне читерное благословение, но может кто-нибудь даст мне руководство о том, как им пользоваться?\n" +
                        "\n" +
                        "– Уже неделя прошла, а я всё ещё не знаю, как мне активировать Сяо Хэя…\n" +
                        "\n" +
                        "Сяо Хэй - это благословение, выбранное Линь Хуаном до его реинкарнации. Оно приняло форму чёрной карты. Несмотря на попытки Линь Хуана активировать его на прошлой неделе, чёрная карта никак не реагировала. Он даже так и не узнал ничего о её способности.\n" +
                        "\n" +
                        "– Брат, я дома!\n" +
                        "\n" +
                        "Когда Линь Хуан хотел было начать бурчать о “Мошеннических игровых компаниях”, на весь дом раздался девичий голос. После чего последовал звук закрывания двери, когда девушка закончила с вводом пароля от входной двери и вошла в дом.\n" +
                        "\n" +
                        "Закрыв меню, Линь Хуан успокоил себя и спустился вниз по лестнице. Он жил в двухэтажном доме с двумя спальнями, расположенными на 2-м этаже.\n" +
                        "\n" +
                        "Спустившись по лестнице вниз, он улыбнулся девушке, которая как раз снимала в коридоре свою обувь.\n" +
                        "\n" +
                        "Ей было лет 12-13, с короткой стрижкой, длинна которой была до мочек ушей и с чёлкой, закрывающей её брови. Из-под чёлки сверкала пара чёрных глаз, с ребяческим прищуром. На ней была белая футболка с цветочным принтом, пара белых джинc и белая спортивная обувь.\n" +
                        "\n" +
                        "– С возвращением Синь'эр. Иди мой руки, обед уже почти готов. – сказал Линь Хуан девушке.\n" +
                        "\n" +
                        "Когда брат с сестрой сидели лицом друг к другу за обеденным столом, розовые кольца на их левых мизинцах внезапно завибрировали и перед ними появились полупрозрачные экраны.\n" +
                        "\n" +
                        "Это розовое кольцо выдавалось сразу же после регистрации новорождённого ребёнка. Оно было известно как “Кольцо Сердца Империи” и содержало личную информацию о владельце, личное пространство для хранения, а так же функционировало как инструмент связи, который имел доступ в HeartNet. Внезапные анонсы, подобные этим, не были обычным явлением и, как правило, были вызваны какими-нибудь важными событиями.\n" +
                        "\n" +
                        "– Хм? – удивилась Линь Синь. Линь Хуан перестал есть и сосредоточился на экране.\n" +
                        "\n" +
                        "{Срочные новости! Сегодня в 4:30, во второй половине дня, в 310 км к юго-востоку от Цитадели 7D101, было обнаружено Око Бездны. По нашим предположениям, монстры проникли в этот район. Ближайшим районам советуем принять информацию к сведению и ночью не покидать своих домов.}\n" +
                        "\n" +
                        "Когда объявление закончилось, Линь Хуан нахмурился. 7D101 был серийным номером их Цитадели.\n" +
                        "\n" +
                        "Цитадели были классифицированы как А, B, C и D ранга, в соответствии с их размерами – Центральная, Большая, Средняя и Малая Цитадель. 7 в 7D101 была серийным номером безопасной зоны, на которой находилась Цитадель. В то время как число 101 было номером этой Цитадели.\n" +
                        "\n" +
                        "Что касается упомянутого ранее Ока Бездны, то это был пространственный портал, из которого монстры вторгались в этот мир. Из-за того, что сам портал имеет сходство с человеческим зрачком, появившись впервые, он стал широко известен как “Око Бездны”.\n" +
                        "\n" +
                        "– Брат, Цитадель в безопасности же? Око Бездны появилось так близко... – беспокоясь, спросила Линь Синь.\n" +
                        "\n" +
                        "– Не волнуйся, ты же слышала объявление? Охотники в любом случае получили эту информацию намного раньше. Кроме того, каждая Цитадель имеет свою собственную защиту и её не так уж и просто сломить. – утешая сестру, улыбнулся Линь Хуан, – Давай кушать!\n" +
                        "\n" +
                        "После обеда Линь Синь ушла в свою спальню, чтобы закончить домашнее задание, в то время как Линь Хуан убирал со стола. Когда он закончил с мытьём посуды, уже наступила ночь.\n" +
                        "\n" +
                        "Вернувшись в свою спальню, Линь Хуан подключился к домашней странице HeartNet и начал проверять статус Ока Бездны. Новости были расположены в хронологическом порядке:\n" +
                        "\n" +
                        "«Волны Охотников на монстров стали прибывать к Оку Бездны для зачистки».\n" +
                        "\n" +
                        "«Серебряный охотник Ли Лан был замечен возле Цитадели 7D101!»\n" +
                        "\n" +
                        "«Команда из 18 охотников, с Ли Ланом в качестве лидера, начала операцию по уничтожению монстров».\n" +
                        "\n" +
                        "«После часа охоты, все монстры ранга Железа в радиусе 100 км от Ока бездны были уничтожены. Всё больше и больше охотников присоединяются к зачистке окружающих районов.»\n" +
                        "\n" +
                        "По мере того, как Линь Хуан читал строки новостей, беспокойство постепенно его отпускало. Несмотря на своё показное спокойствие перед сестрой, на самом деле он точно так же переживал. Это был первый такой случай, с тех пор, как он сюда попал. К счастью, в новостях ничего не было сказано о монстрах более высоких рангов, поэтому Линь Хуан постепенно стал успокаиваться.\n" +
                        "\n" +
                        "Появлялось Око Бездны всегда непредсказуемо. Было невозможно вычислить время, место, ранг или количество вышедших из него монстров. Если там будет много высокоранговых монстров или же их количество будет огромным, то команда охотников потерпит сокрушительное поражение, даже с охотником золотой карты. 7D101 – малая Цитадель и легко падёт от орды монстров.\n" +
                        "\n" +
                        "И пусть Линь Хуан не мог пока понять, как использовать своё благословение, однако понять, что происходит вокруг, он мог.\n" +
                        "\n" +
                        "В HeartNet было опубликовано множество видеороликов с монстрами. Его первый опыт работы с этими видеороликами был, по меньшей мере, травмирующим.\n" +
                        "\n" +
                        "Видео, которое травмировало его больше всего, было видео о резне в Большой Цитадели. Он до сих пор помнит каждую минуту этой ужасной записи.\n" +
                        "\n" +
                        "Во тьме внезапно открылся кроваво-красный глаз и начался кошмар. Бесконечная орда монстров вылетела из Ока Бездны и в миг прорвала оборону Цитадели. Сотни миллионов людей погибли в тот день, когда земля Цитадели окрасилась в красный. Бесчисленные кости и трупы лежали в море крови. И монстры с жадностью эти трупы жрали.\n" +
                        "\n" +
                        "Цитадель, в которой жил Линь Хуан, была ранга D, что было эквивалентно маленькому городу на Земле. Она имела стотысячное население и находилась в зоне с самим низким рейтингом защищённости. Если бы из этого Ока Бездны появился высокоранговый монстр, то началась бы массовая резня. К счастью такого монстра там не было.\n" +
                        "\n" +
                        "Закрыв HeartNet, он начал размышлять о событиях прошлой недели.\n" +
                        "\n" +
                        "«Согласно моему уровню потребления Праны, у меня осталось около 91 дня жизни. Самая главная задача – пополнить мою Прану Кристаллами Жизни. К тому же, у меня до сих пор нет никаких подсказок как мне активировать моё благословление... Но не будем пока об этом. Самые дешёвые Кристаллы Жизни – это Кристаллы Жизни в один год и стоят они не менее ста тысяч кредитов. На данный момент мои сбережения составляют чуть меньше 30 000 кредитов, так что кристаллы пока что для меня недосягаемы».\n" +
                        "\n" +
                        "Кристаллы жизни – это редкий дроп с монстров. Они содержат большое количество Праны. Для использования, нужно просто пожевать его и Прана втечёт в Колесо Жизни.\n" +
                        "\n" +
                        "«Самый быстрый способ заработать деньги – это охота на монстров. Может мне повезёт и среди дропа я найду и Кристалл Жизни. Однако, со способностями этого тела, ниже ранга Железа, количество монстров на которых я могу охотиться, очень ограничено – самые никчёмные монстры. Но мне может просто повезти, и я найду Кристалл Жизни на охоте. Завтра я закончу приготовления и выдвинусь на следующий же день!»\n" +
                        "\n" +
                        "Завершив свой план, Линь Хуан избавился от посторонних мыслей и погрузился в глубокий сон.\n" +
                        "\n" +
                        "Посреди ночи раздался звук разбитого стекла, прервавший сон Линь Хуана.\n" +
                        "\n" +
                        "– Аааа!!!\n" +
                        "\n" +
                        "Пока он постепенно приходил в себя, раздался девичий крик. Голос доносился совсем рядом и Линь Хуан понял, что это кричала его сестра.\n" +
                        "\n" +
                        "Линь Хуан вскочил с постели, быстро оделся и бросился в комнату Линь Синь, пинком открыв туда дверь."
                },
                {
                    id: 2,
                    title: "Вампир",
                    text: "Сердце Линь Хуана начало бешено колотиться, когда он увидел происходящее в комнате Линь Синь.\n" +
                        "\n" +
                        "Под ярким светом комнаты, было хорошо видно, как какой-то молодой человек протискивается сквозь разбитое окно, руками цепляясь за ноги Линь Синь и уверенно что-то бормоча.\n" +
                        "\n" +
                        "Линь Синь в отчаянии отползла к своей кровати, стараясь отказаться как можно дальше от незваного гостя. Она дрожала и плакала. Парализованная страхом, она, казалось, совсем забыла, что она может просто встать и убежать.\n" +
                        "\n" +
                        "Линь Хуан посмотрел на парня. Волосы его были красного цвета, а рот и рубашка были в крови. Однако самой примечательной особенностью были его глаза. Они были красными, совсем без белков. Линь Хуана прошиб холодный пот, когда он узнал этого вторженца. Это был вампир.\n" +
                        "\n" +
                        "Линь Хуан окинул взглядом комнату и увидел школьную сумку Линь Синь, которую та небрежно бросила слева у двери. Он схватил сумку и бросил её в вампира, пытаясь как-то того отвлечь.\n" +
                        "\n" +
                        "Увидев летящую в него сумку, вампир разорвал её когтями.\n" +
                        "\n" +
                        "Воспользовавшись тем, что вампир на миг отвлёкся, Линь Хуан бросился к постели, закинул Линь Синь на плечо и кинулся к двери.\n" +
                        "\n" +
                        "Едва он отошёл от кровати, он услышал крик, доносящийся из-за спины. Повернув голову, он увидел, как синеватая рука вампира схватила Линь Синь за левую лодыжку.\n" +
                        "\n" +
                        "– Закрой глаза!\n" +
                        "\n" +
                        "Услышав крик брата, Линь Синь закрыла глаза. Линь Хуан в это время схватил лампу, стоящую у кровати, и ударил ею по руке вампира.\n" +
                        "\n" +
                        "Лампа была сделана из флуоресцентного камня, который, при разрушении, создавал ослепительную вспышку света и обжигающий жар. Из-за опасных свойств этого камня, он не использовался богатыми людьми. Однако в данный момент, эта дешёвая лампа спасла им жизнь.\n" +
                        "\n" +
                        "Когда ядро лампы ударилось о руку вампира, то в момент его разрушения, ослепительная вспышка заполнила комнату. Камень начал создавать жар, температура которого повышалась и обжигала руку вампира. Ревущий от боли кровосос разжал свою лапу.\n" +
                        "\n" +
                        "Почувствовав, что его ничего больше не тянет, Линь Хуан бросился к двери. Прежде чем вампир опомнился, он уже выбежал из комнаты и спустился вниз по лестнице.\n" +
                        "\n" +
                        "Линь Хуан включал каждый переключатель света, что мог найти. Потому что он знал – вампиры не любят яркий свет, тем более ночью. Они наслаждаются преследованием своей жертвы из темноты и избегают областей с яркими огнями, где их могут обнаружить. Именно по этой причине он не хотел входить в комнату Линь Синь.\n" +
                        "\n" +
                        "Когда брат с сестрой оказались на первом этаже, они услышали звук разбивающегося стекла, раздавшихся сверху.\n" +
                        "\n" +
                        "“Это, наверное, звук разбитой лампы в комнате Линь Синь”\n" +
                        "\n" +
                        "– Спрячься в туалете и запри дверь! – обернулся Линь Хуан и крикнул сестре.\n" +
                        "\n" +
                        "– А как же ты? – Линь Синь, наконец, оправилась от шока и подумала о безопасности своего брата.\n" +
                        "\n" +
                        "– Я смогу справиться с ним. Я ведь был лучшим выпускником Колледжа Охотников. Ты мне будешь только мешать. – хладнокровно объяснил Линь Хуан.\n" +
                        "\n" +
                        "– Хорошо. – Линь Синь кивнула и помчалась в туалет. Несмотря на то, что она боялась вампира, она полностью доверяла брату.\n" +
                        "\n" +
                        "Линь Хуан быстро подключился к HeartNet и отправил SOS. Затем он вооружился кухонным ножом.\n" +
                        "\n" +
                        "Самые слабые вампиры были ранга Железа и обладали силой 10 взрослых мужчин. Кроме того, они обладали Искусством Крови, что делает их сильнее, чем большая часть монстров ранга Железа. Практикующему охотнику ранга Железа было бы тяжело справится с таким существом, что уж говорить о выпускнике, хоть и лучшем на своём потоке.\n" +
                        "\n" +
                        "Слова Линь Хуана были в основном для утешения его сестры. Он полностью осознавал свои шансы на победу. Их практически не было.\n" +
                        "\n" +
                        "Однако его удивляло необычное спокойствие, которое он сохранял перед лицом такого ужасающего противника.\n" +
                        "\n" +
                        "Информация о вампирах быстро всплыла в его памяти.\n" +
                        "\n" +
                        "Вампиры – это монстры, которые днём выдают себя за обычных людей, а ночью возвращаются к своей кровожадной сущности.\n" +
                        "\n" +
                        "Они питаются кровью людей и особенно любят кровь молодых девушек. Их обоняние способно учуять запах крови за сотню километров.\n" +
                        "\n" +
                        "Даже самый слабый вампир может удвоить свою боевую мощь с помощью своих кровавых искусств. Они могут собирать энергию крови вокруг своего тела, чтобы сформировать защитный слой. Этот энергетический слой может стать крыльями, хвостом, когтями или другими формами оружия, чтобы повысить их боевую эффективность.\n" +
                        "\n" +
                        "Вампиры, по своей природе, ненавидят яркие огни, но не боятся их. Их единственной слабостью является вещество, известное как “Фактор Подавления Крови”, который является редким растительным экстрактом.\n" +
                        "\n" +
                        "Точнее, фактор подавления крови токсичен для любого существа, которое состоит из плоти и крови, включая людей. Если это вещество попадает на любую рану, оно быстро проникает в систему кровообращения и приводит к смерти эритроцитов. Форма этого вещества, используемая в качестве оружия, называется “Токсин Подавления Крови”, он доступен в коммерческих целях и часто используется охотниками в качестве смазки для оружия.\n" +
                        "\n" +
                        "Фактор подавления крови оказывает невероятно сильный эффект на вампиров. Оружие, смазанное этим токсином, с лёгкостью проникает сквозь их защитный слой. Как только вещество попадает в рану, их тела начинают гнить. Через три часа от них остаётся только кучка гниющей плоти.\n" +
                        "\n" +
                        "Однако цена этого токсина очень высокая. Даже лицензированные охотники не могут позволить себе большое количество этого яда и имеют при себе лишь немного, для самообороны. С нынешними сбережениями Линь Хуана, он, конечно же, не мог себе позволить такие расходы.\n" +
                        "\n" +
                        "Пока Линь Хуан размышлял о своей текущей ситуации, розовое кольцо на его пальце завибрировало.\n" +
                        "\n" +
                        "– Меня зовут Ли Лан. Я – охотник. Это вы разослали сигнал SOS? Вы можете объяснить ситуацию? – молодой и спокойный голос донёсся из SOS канала HeartNet.\n" +
                        "\n" +
                        "– В наш дом вторгся вампир... – начала объяснять Линь Хуан, когда наверху раздался грохочущий звук. Тень спрыгнула с дыры в потолке и приземлилась перед ним в облаке пыли, – Зафиксируйте координаты моего кольца и, пожалуйста, поторопитесь!\n" +
                        "\n" +
                        "Он быстро отправил свои координаты и повесил трубку. Ему нужно было сосредоточиться на враге перед ним ... Враг, у которого была сила 10-ти человек.\n" +
                        "\n" +
                        "*Бум* *Бум* *Бум*\n" +
                        "\n" +
                        "Эхом отозвались тяжёлые шаги, когда вампир подошёл к Линь Хуану. Холодный пот градом покатился по спине парня, когда он увидел смотрящие на него красные глаза.\n" +
                        "\n" +
                        "Однако что-то отвлекло внимание вампира, и он повернулся в сторону туалета. Он учуял запах своей добычи. За той дверью находился источник этого запаха.\n" +
                        "\n" +
                        "Поскольку его потребность в еде пересилила гнев, который он испытывал к Линь Хуану, слюна начала капать с его рта на пол, и он двинулся в сторону туалета.\n" +
                        "\n" +
                        "– Эй, ты что-то забыл! – крикнул Линь Хуан, одновременно бросая кухонный нож в вампира."
                }
            ]
        },
        {
            name: "Бог Войны, отмеченный Драконом",
            author: "Dragon-Marked War God",
            description: "Некогда величайший Святой, переродился спустя столетие. Он развивает могучие навыки и сражается, дабы снова взойти на вершину мира!\n" +
    
            "\nНикто не может сравниться с ним в скорости развития, ибо все меркнут в его тени.\n" +
        
            "\nНикто не сравнится с ним в боевом опыте, ибо он величайший предок прошлого.\n" +
    
            "Судьбой Цзян Чэню суждено затмить тысячи гениев...",
            image: ImageDragon,
            likes: 0,
            dislikes: 0,
            rating: 4.7,
            views: 118,
        },
        {
            name: "Всемогущий Геймдизайнер",
            author: "Qing Shan Qu Zui",
            description: "Чэнь Мо нравилось называть себя геймдизайнером, несмотря на то, что он был простым продюссером видеоигр. Умерев от стресса, который был связанн с его работой, он переселился в параллельный мир в свое тело, которое недавно окончило универ. Теперь он был в теле своего молодого \"Я\", которое стремилось стать геймдизайнером. Сможет ли он осуществить свою мечту, переродившись в этом странно отличающемся новом мире, и стать лучшим геймдизайнером в этом мире? Следуйте за Чэнь Мо, наблюдайте за тем, как он переносит великие игры прошлого в совершенно новый мир в погоне за своей мечтой!",
            image: ImageGameDesigner,
            likes: 0,
            dislikes: 0,
            rating: 4.2,
            views: 31,
        },
        {
            name: "Маг на полную ставку",
            author: "Chaos",
            description: "Он проснулся в привычном ему мире, который сильно изменился. Его школа стала школой магии, которая призывает всех стать могущественными магами. За пределами города бродит множество монстров. Мир науки и технологии превратился в мир магии! Несмотря на это, его амбиции и положение в обществе не изменились. Он - отброс общества, у которого сестра-инвалид, которая даже не может ходить. Тем не менее, Мо Фань обнаружил, что все люди могут управлять лишь одним элементом, но только не он, ему подвластно больше!",
            image: Mag,
            likes: 0,
            dislikes: 0,
            rating: 4.2,
            views: 129,
        },
        {
            name: "Преподобный Гу",
            author: "Gu Zhen Ren",
            description: "Люди искусны в десятках тысяч путей, Гу истинная усовершенствованная сущность неба и земли.\n" +
                "\n" +
                "Три храма нечестивы, демон возрождается. \n" +
                "\n" +
                "Прежние дни - это всего лишь старый сон, аналогичное имя рождается заново. \n" +
                "\n" +
                "История путешественника во времени, который продолжает возрождаться. \n" +
                "\n" +
                "Уникальный мир, который растет, развивается и использует Гу. \n" +
                "\n" +
                "Цикада Весны и Осени, Ядовитый Лунный Свет Гу, Виноград Чон, Всеохватывающий Золотой Свет Чон, Тонкие Черные Волосы Гу, Гу Надежды…\n" +
                "\n" +
                "И великий демон мира, который делает все, что душе угодно! ",
            image: ImageGreetGy,
            likes: 0,
            dislikes: 0,
            rating: 4.4,
            views: 201,
        },
        {
            name: "Легендарный механик",
            author: "Chocolion",
            description: "Однажды очнувшись, вы обнаружили, что находитесь внутри любимой игры. Но что вам делать, если вы не только стали NPC, но и оказались настолько в прошлом игрового мира, что игра к этому моменту даже не была запущена? Что произойдёт, когда ваш прошлый мир начнёт вытесняться нынешней реальностью?\n" +
                "\n" +
                "До того, как Хан Сяо вот так вот переродился, он зарабатывал тем, что профессионально занимался прокачкой аккаунтов. И вот, со всем багажом знаний из своей прошлой жизни, Хан Сяо начнёт своё восхождение в этом мире, готовясь к моменту прибытия игроков.\n" +
                "\n" +
                "Это определённо нетипичная новелла о перерождении, наполненная богатыми приключениями и юмором. Погрузитесь в мир Легендарного Механика вместе с нами!",
            image: ImageLegendaryMechanic,
            likes: 0,
            dislikes: 0,
            rating: 4.3,
            views: 73,
        },
        {
            name: "Три дня счастья",
            author: "Sugaru Miaki",
            description: "До того дня в его жизни не произошло ничего хорошего. Поэтому её оценили по десять тысяч иен за год. Пессимистично думая о будущем, он продал отведённое ему время, чтобы хоть немного почувствовать радость оставшейся жизни. В итоге, к нему была приставлена Мияги - \"Наблюдатель\", чтобы следить за ним, пока тот не умрёт...",
            image: ImageThreeDays,
            likes: 20,
            dislikes: 3,
            rating: 4.8,
            views: 121,
        },
        {
            name: "Мир Онлайн",
            author: "Sheng Xiao",
            description: "Преданный его названным братом, Оуян Шо чудесным образом перемещается на 5 лет в прошлое. Только на этот раз он решил избрать совершенно другой путь, используя свои знания за последующие пять лет, для того, чтобы построить империю. Роман содержит технические аспекты построения королевства, такие как создание различных ведомств и отделов, а также военные аспекты, которые все знают и любят. Читайте новеллу, чтобы узнать, как ГГ поднимется на вершину, преодолевая все препятствия!",
            image: ImageWorldOnline,
            likes: 0,
            dislikes: 0,
            rating: 3.9,
            views: 53,
        },
        {
            name: "Воинственный Бог Асура",
            author: "Kindhearted Bee",
            description: "Даже если у тебя и есть потенциал, это вовсе не значит, что ты гений. Ты можешь выучить какие-нибудь тайные боевые техники и за их счет получить силу. И будь ты даже силен и богат, это вовсе не значит, что ты сможешь одолеть мою армию духов. Кто я? Каждое живое существо признало меня Асурой. И я объявляю тебе войну!",
            image: ImageAsura,
            likes: 0,
            dislikes: 0,
            rating: 5.0,
            views: 189,
        },
        {
            name: "Восставший против неба",
            author: "Mars Gravity",
            description: "Убегая от погони, юноша прыгает с обрыва, чтобы доставшееся ему сокровище не попало в руки преследователей. Очнувшись, он обнаруживает себя в теле юноши с таким же именем в другом мире. К счастью, ему удалось сохранить и сокровище.",
            image: AgainstTheGods,
            likes: 0,
            dislikes: 0,
            rating: 4.0,
            views: 201,
        },
    ],
    news: [
        {
            title: "Обновление 2.14",
            text: "Рандомизатором текста называется спамерский софт, который нужен для массового рерайтинга нового контента для нужд продвижения сайта в поисковой выдаче.\n" +
                "Рандомизатором называется спамерский инструмент, предназначенный для индустриального рерайтинга новых публикаций.\n" +
                "Рандомайзер текста - оптимизаторская софтина для индустриальной рандомизации публикаций для нужд сео продвижения.\n" +
                "Рандомайзером текста называется оптимизаторский скрипт для промышленного переписывания уникального контента в целях сеошного продвижения сайта.\n" +
                "Рандомизатор - это сеошная программа, которая предназначена для псевдоуникализации контента.\n" +
                "Рандомизатор - рерайтерская прога, предназначенная для индустриального размножения рандомных публикаций для нужд продвижения в выдаче поисковиков.\n" +
                "Рандомизатором текста называется SEO инструмент для индустриальной рандомизации текстов.\n" +
                "Рандомайзером называется утилита, которая нужна для рерайта нового контента в целях продвижения сайта в выдаче поисковиков.\n" +
                "Рандомайзер текста - это скрипт, который используется для поточной уникализации статей для нужд сео оптимизаторов.\n" +
                "Рандомизатором называется SEO прога, которая нужна для промышленной псевдоуникализации статей.\n" +
                "Рандомизатор - рерайтерский софт, предназначенный для поточного рерайта в целях SEO продвижения.\n" +
                "Рандомайзером текста называется сео скрипт, предназначенный для рандомизации контента для нужд сео оптимизации контента.\n" +
                "Рандомайзер текста - это сео утилита, предназначенная для массового создания псевдоуникальных статей в целях SEO оптимизации.\n" +
                "Рандомизатор - спамерская софтина, которая предназначена для промышленного рерайтинга псевдоуникальных текстов.\n" +
                "Рандомизатором называется сеошный инструмент, который предназначен для массовой псевдоуникализации публикаций в целях спама."
        },
        {
            title: "Новая новелла уже на сайте!",
            text: "Рандомизатором текста называется спамерский софт, который нужен для массового рерайтинга нового контента для нужд продвижения сайта в поисковой выдаче.\n" +
                "Рандомизатором называется спамерский инструмент, предназначенный для индустриального рерайтинга новых публикаций.\n" +
                "Рандомайзер текста - оптимизаторская софтина для индустриальной рандомизации публикаций для нужд сео продвижения.\n" +
                "Рандомайзером текста называется оптимизаторский скрипт для промышленного переписывания уникального контента в целях сеошного продвижения сайта.\n" +
                "Рандомизатор - это сеошная программа, которая предназначена для псевдоуникализации контента.\n" +
                "Рандомизатором называется SEO прога, которая нужна для промышленной псевдоуникализации статей.\n" +
                "Рандомизатор - рерайтерский софт, предназначенный для поточного рерайта в целях SEO продвижения.\n" +
                "Рандомайзером текста называется сео скрипт, предназначенный для рандомизации контента для нужд сео оптимизации контента.\n" +
                "Рандомайзер текста - это сео утилита, предназначенная для массового создания псевдоуникальных статей в целях SEO оптимизации.\n" +
                "Рандомизатор - спамерская софтина, которая предназначена для промышленного рерайтинга псевдоуникальных текстов.\n" +
                "Рандомизатором называется сеошный инструмент, который предназначен для массовой псевдоуникализации публикаций в целях спама."
        },
        {
            title: "Технические работы 28.05.22",
            text: "Рандомизатором текста называется спамерский софт, который нужен для массового рерайтинга нового контента для нужд продвижения сайта в поисковой выдаче.\n" +
                "Рандомизатором называется спамерский инструмент, предназначенный для индустриального рерайтинга новых публикаций.\n" +
                "Рандомайзер текста - оптимизаторская софтина для индустриальной рандомизации публикаций для нужд сео продвижения.\n" +
                "Рандомайзером текста называется оптимизаторский скрипт для промышленного переписывания уникального контента в целях сеошного продвижения сайта.\n" +
                "Рандомизатор - это сеошная программа, которая предназначена для псевдоуникализации контента.\n" +
                "Рандомизатор - рерайтерская прога, предназначенная для индустриального размножения рандомных публикаций для нужд продвижения в выдаче поисковиков.\n" +
                "Рандомизатором текста называется SEO инструмент для индустриальной рандомизации текстов.\n" +
                "Рандомайзером называется утилита, которая нужна для рерайта нового контента в целях продвижения сайта в выдаче поисковиков.\n" +
                "Рандомайзер текста - это скрипт, который используется для поточной уникализации статей для нужд сео оптимизаторов.\n" +
                "Рандомизатором называется SEO прога, которая нужна для промышленной псевдоуникализации статей.\n"
        },
        {
            title: "Блог 1.2 - уже вышел!",
            text: "Рандомизатором текста называется спамерский софт, который нужен для массового рерайтинга нового контента для нужд продвижения сайта в поисковой выдаче.\n" +
                "Рандомизатором называется спамерский инструмент, предназначенный для индустриального рерайтинга новых публикаций.\n" +
                "Рандомайзер текста - оптимизаторская софтина для индустриальной рандомизации публикаций для нужд сео продвижения.\n" +
                "Рандомайзером текста называется оптимизаторский скрипт для промышленного переписывания уникального контента в целях сеошного продвижения сайта.\n" +
                "Рандомизатор - это сеошная программа, которая предназначена для псевдоуникализации контента.\n"
        },
        {
            title: "Перевод новеллы - 3 дня счастья",
            text: "Рандомизатором текста называется спамерский софт, который нужен для массового рерайтинга нового контента для нужд продвижения сайта в поисковой выдаче.\n" +
                "Рандомизатором называется спамерский инструмент, предназначенный для индустриального рерайтинга новых публикаций.\n" +
                "Рандомайзер текста - оптимизаторская софтина для индустриальной рандомизации публикаций для нужд сео продвижения.\n" +
                "Рандомайзером текста называется оптимизаторский скрипт для промышленного переписывания уникального контента в целях сеошного продвижения сайта.\n" +
                "Рандомизатор - это сеошная программа, которая предназначена для псевдоуникализации контента.\n" +
                "Рандомизатор - рерайтерская прога, предназначенная для индустриального размножения рандомных публикаций для нужд продвижения в выдаче поисковиков.\n" +
                "Рандомизатором текста называется SEO инструмент для индустриальной рандомизации текстов.\n" +
                "Рандомайзером называется утилита, которая нужна для рерайта нового контента в целях продвижения сайта в выдаче поисковиков.\n" +
                "Рандомайзер текста - это скрипт, который используется для поточной уникализации статей для нужд сео оптимизаторов.\n" +
                "Рандомизатором называется SEO прога, которая нужна для промышленной псевдоуникализации статей.\n" +
                "Рандомизатор - рерайтерский софт, предназначенный для поточного рерайта в целях SEO продвижения.\n" +
                "Рандомайзером текста называется сео скрипт, предназначенный для рандомизации контента для нужд сео оптимизации контента.\n" +
                "Рандомайзер текста - это сео утилита, предназначенная для массового создания псевдоуникальных статей в целях SEO оптимизации.\n"
        }
    ]
}

export default function rootReducer(state= initialState, action) {
    switch (action.type) {
        case MENU:
            return {
                ...state,
                menu: !state.menu,
            }
        case IS_SEARCH_BOX_ACTIVE:
            return {
                ...state,
                isSearchBox: !state.isSearchBox,
            }
        case SEARCH_BOX_VALUE:
            return {
                ...state,
                searchBoxValue: action.payload
            }
        case RESET_SEARCH_BOX_VALUE:
            return {
                ...state,
                searchBoxValue: ""
            }
        case BLOG_ID:
            return {
                ...state,
                blogId: action.payload
            }
        case BLACK_THEME:
            return  {
                ...state,
                blackTheme: !state.blackTheme
            }
        default:
            return state
    }
}