import type { CustomFlowbiteTheme } from 'flowbite-react'

export const customTootip: CustomFlowbiteTheme['tooltip'] = {
  arrow: {
    style: {
      light: 'bg-[#E7EAEE]'
    }
  },
  style: {
    light: 'bg-[#E7EAEE] text-gray-900'
  },
  content: 'relative z-20 text-[#505050] text-sm'
}

export const customButton: CustomFlowbiteTheme['button'] = {
  color: {
    failure:
      'text-white bg-[#EB5757] border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',
    info: 'text-white bg-[#0886ED] border border-transparent enabled:hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:enabled:hover:bg-sky-700 dark:focus:ring-sky-800',
    gray: 'text-gray-900 bg-[#E4E4EB] border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2',
    warning:
      'text-white bg-[#FB8818] border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900'
  }
}

export const customTextarea: CustomFlowbiteTheme['textarea'] = {
  base: 'block w-full rounded border disabled:cursor-not-allowed disabled:opacity-50 px-6 py-4',
  colors: {
    white:
      'bg-white border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500'
  }
}

export const customProgress: CustomFlowbiteTheme['progress'] = {
  color: {
    yellow: 'bg-[#FB8818]'
  }
}

export const customCheckbox: CustomFlowbiteTheme['checkbox'] = {
  root: {
    base: 'h-6 w-6 rounded border-2 border-[#292929] bg-white focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600 text-gray-600'
  }
}

export const customRadio: CustomFlowbiteTheme['radio'] = {
  root: {
    base: 'h-6 w-6 border border-gray-300 focus:ring-2 focus:ring-[#064C85] dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-[#064C85] dark:focus:ring-[#064C85] text-[#064C85]'
  }
}
