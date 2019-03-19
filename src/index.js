import ReactDOM from 'react-dom'
import './index.css'
import './styles/public.scss'
import router from './router'
import serviceWorker from './serviceWorker'


ReactDOM.render(
  router,
  document.getElementById('root'),
);

serviceWorker();