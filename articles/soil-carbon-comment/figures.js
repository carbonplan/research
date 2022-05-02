import dynamic from 'next/dynamic'

// NOTE: This is a dynamically generated file assuming that every file within components/ is a
//       kebeb-case-named file exporting a single figure. You may overwrite this file if that
//       assumption does not apply.
const figures = {
  Conclusions: dynamic(() => import('./components/conclusions.js')),
}

export default figures
