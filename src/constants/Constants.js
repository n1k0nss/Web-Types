const DEFAULT_WORDS_COUNT = 200;
const COUNT_DOWN_90 = 90;
const COUNT_DOWN_60 = 60;
const COUNT_DOWN_30 = 30;
const COUNT_DOWN_15 = 15;
const DEFAULT_COUNT_DOWN = COUNT_DOWN_60;

const DEFAULT_DIFFICULTY = "normal";
const HARD_DIFFICULTY = "hard";
const RESTART_BUTTON_TOOLTIP_TITLE = "[Tab] + [Enter] для швидкого рестарту";
const REDO_BUTTON_TOOLTIP_TITLE = "[Tab] + [Space] щоб повернутись";
const RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD = "[Tab] + [Enter] щоб швидко перезапустити розділ";
const SELECT_ONE_OR_MORE_CHAPTERS = "Відкрийте, щоб вибрати один або кілька розділів. Виберіть розділи в області введення."
const RECITE_MODE_TITLE = "Сховати слово";
const DEFAULT_DIFFICULTY_TOOLTIP_TITLE =
  "звичайний режим генерує випадкові слова з 1000 найуживаніших слів у наборі даних англійською мовою.";
const HARD_DIFFICULTY_TOOLTIP_TITLE =
  "складний режим генерує випадкові слова з даних слів у публікаціях блогу, тому ви можете зустріти довші та рідше вживані слова.";
const CHAR_TOOLTIP_TITLE =
  "правильні/неправильні/відсутні/зайві\n зайві записуються навіть у разі видалення.";
const SENTENCE_CHAR_TOOLTIP_TITLE = "правильно/неправильно/зайве\n";
const ENGLISH_MODE_TOOLTIP_TITLE = "Режим англійської";
const UKRAINIAN_MODE_TOOLTIP_TITLE = "Режим української";
const DEFAULT_DIFFICULTY_TOOLTIP_TITLE_UKRAINIAN =
  "звичайний режим генерує випадкові слова з 1000 в українському наборі даних.";
const HARD_DIFFICULTY_TOOLTIP_TITLE_UKRAINIAN =
  "звичайний режим генерує випадкові слова, які рідше зустрічаються.";

const GITHUB_TOOLTIP_TITLE =
  "Dear visitors: \n For feature requests or bug reports, please submit an issue to the github repo. \n Welcome contributing with a fork. \n If you like my works, please star the project. \n Thanks! \n";
const CONTACT_TOOLTIP_TITLE =
  "Ви можете зв'язатись з автором у Telegram: \n";
const AUTHOR = "author: @Muyang Guo\n";
const GITHUB_REPO_LINK = "project: @Github\n";

const FOCUS_MODE = "Режим фокусу";

const MUSIC_MODE =
  "Spotify-плеєр. Вам потрібно буде спочатку ввійти в Spotify, щоб використовувати всі функції.";
const FREE_MODE =
  "Режим вільного набору тексту\n Введіть що завгодно, без тиску, час кави!\n ";

const ENGLISH_MODE = "ENGLISH_MODE";
const UKRAINIAN_MODE = "UKRAINIAN_MODE";

const GAME_MODE = "GAME_MODE";
const GAME_MODE_DEFAULT = "WORD_MODE";
const GAME_MODE_SENTENCE = "SENTENCE_MODE";
const WORD_MODE_LABEL = "word";
const SENTENCE_MODE_LABEL = "sentence";
const TRAINER_MODE = "QWERTY режим практики";

const DEFAULT_SENTENCES_COUNT = 5;
const TEN_SENTENCES_COUNT = 10;
const FIFTEEN_SENTENCES_COUNT = 15;

const ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE = "Режим ENG речень";
const UKRAINIAN_SENTENCE_MODE_TOOLTIP_TITLE = "Режим UKR речень";

const PACING_CARET = "caret";
const PACING_PULSE = "pulse";

const PACING_CARET_TOOLTIP = "вводьте слово в режимі caret \"|\" , символ за символом.";
const PACING_PULSE_TOOLTIP = "вводьте слово в режимі pulse \"____\", це допомагає покращити швидкість набору тексту та вашу звичку швидкості друку.";

export {
  DEFAULT_WORDS_COUNT,
  DEFAULT_COUNT_DOWN,
  COUNT_DOWN_60,
  COUNT_DOWN_30,
  COUNT_DOWN_15,
  COUNT_DOWN_90,
  DEFAULT_DIFFICULTY,
  HARD_DIFFICULTY,
  DEFAULT_DIFFICULTY_TOOLTIP_TITLE,
  HARD_DIFFICULTY_TOOLTIP_TITLE,
  CHAR_TOOLTIP_TITLE,
  SENTENCE_CHAR_TOOLTIP_TITLE,
  GITHUB_TOOLTIP_TITLE,
  CONTACT_TOOLTIP_TITLE,
  FOCUS_MODE,
  MUSIC_MODE,
  ENGLISH_MODE,
  UKRAINIAN_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE,
  REDO_BUTTON_TOOLTIP_TITLE,
  ENGLISH_MODE_TOOLTIP_TITLE,
  UKRAINIAN_MODE_TOOLTIP_TITLE,
  DEFAULT_DIFFICULTY_TOOLTIP_TITLE_UKRAINIAN,
  HARD_DIFFICULTY_TOOLTIP_TITLE_UKRAINIAN,
  FREE_MODE,
  GAME_MODE,
  GAME_MODE_DEFAULT,
  GAME_MODE_SENTENCE,
  WORD_MODE_LABEL,
  SENTENCE_MODE_LABEL,
  DEFAULT_SENTENCES_COUNT,
  TEN_SENTENCES_COUNT,
  FIFTEEN_SENTENCES_COUNT,
  ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE,
  UKRAINIAN_SENTENCE_MODE_TOOLTIP_TITLE,
  AUTHOR,
  GITHUB_REPO_LINK,
  TRAINER_MODE,
  RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD,
  SELECT_ONE_OR_MORE_CHAPTERS,
  RECITE_MODE_TITLE,
  PACING_CARET,
  PACING_PULSE,
  PACING_CARET_TOOLTIP,
  PACING_PULSE_TOOLTIP
};
