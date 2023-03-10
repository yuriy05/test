export enum COLOR_ENUM {
  DEFAULT = 'default', // ДЕФОЛТНЫЙ
  TEXT_PRIMARY = 'textPrimary', // Активный цвет шрифта. Юзается на заголовках и важном тексте
  TEXT_SECONDARY = 'textSecondary', // Основной цвет шрифта. Юзается на дефолтных компонентах, дефолтном тексте данных
  INPUT = 'input', // Цвет инпута и любых других элементов с которыми можно инпутировать
  ERROR = 'error', // Ошибка
  BUTTON_PRIMARY = 'buttonPrimary', // Активный цвет кнопки
  BORDER = 'border', // Цвет бордера и дивидера
  SUCCESS = 'success', // Цвет успеха
  DISABLED = 'disabled', // Цвет неактивного инпута или чего-либо другого (если у него нет своего цвета неактивности)
  TEXT_THIRD = 'textThird', // Второстепенный не важный цвет текста
  BACKGROUND_PRIMARY = 'backgroundPrimary', // Основноый цвет фона
  TEXT_LINK = 'textLink', // Цвет активных ссылок
  LIGHT = 'light', // Светлый цвет
  BUTTON_HOVER = 'buttonHover', // Цвет ховер кнопки
  BUTTON_ACTIVE = 'buttonActive', // цвет фокус/нажатия кнопки
  ACTION = 'action', // CTA цвет
  WHITE = 'white', // Белый цвет
  BACKGROUND_SECONDARY = 'backgroundSecondary',
}

export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#121212',
  [COLOR_ENUM.TEXT_PRIMARY]: '#121212',
  [COLOR_ENUM.TEXT_SECONDARY]: '#363636',
  [COLOR_ENUM.ERROR]: '#FB6061',
  [COLOR_ENUM.BUTTON_PRIMARY]: '#F46F17',
  [COLOR_ENUM.BORDER]: '#E6E6E6',
  [COLOR_ENUM.SUCCESS]: '#59B436',
  [COLOR_ENUM.DISABLED]: '#888888',
  [COLOR_ENUM.TEXT_THIRD]: '#888888',
  [COLOR_ENUM.BACKGROUND_PRIMARY]: '#FEF1E8',
  [COLOR_ENUM.TEXT_LINK]: '#F46F17',
  [COLOR_ENUM.LIGHT]: '#E6E6E6',
  [COLOR_ENUM.BUTTON_HOVER]: '#f79351',
  [COLOR_ENUM.BUTTON_ACTIVE]: '#f5843a',
  [COLOR_ENUM.ACTION]: '#F46F17',
  [COLOR_ENUM.WHITE]: '#fff',
  [COLOR_ENUM.BACKGROUND_SECONDARY]: '#F7F7F7',
  [COLOR_ENUM.INPUT]: '#F7F7F7',
};
