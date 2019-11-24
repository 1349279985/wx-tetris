import { want } from '../../unit';
import event from '../../unit/event';
import actions from '../../actions';
import states from '../states';
import { speeds, delays } from '../../unit/const';
import { music } from '../../unit/music';

const down = (store) => {
  store.dispatch(actions.keyboard.right(true));
  event.down({
    key: 'right',
    begin: 200,
    interval: 100,
    callback: () => {
      const state = store.getState();
      if (state.get('lock')) {
        return;
      }
      if (music.move) {
        music.move();
      }
      const cur = state.get('cur');
      if (cur !== null) {
        if (state.get('pause')) {
          states.pause(false);
          return;
        }
        const next = cur.right();
        const delay = delays[state.get('speedRun') - 1];
        let timeStamp;
        if (want(next, state.get('matrix'))) {
          next.timeStamp += parseInt(delay, 10);
          store.dispatch(actions.moveBlock(next));
          timeStamp = next.timeStamp;
        } else {
          cur.timeStamp += parseInt(parseInt(delay, 10) / 1.5, 10); // 真实移动delay多一点，碰壁delay少一点
          store.dispatch(actions.moveBlock(cur));
          timeStamp = cur.timeStamp;
        }
        const remain = speeds[state.get('speedRun') - 1] - (Date.now() - timeStamp);
        states.auto(remain);
      } else {
        let speed = state.get('speedStart');
        speed = speed + 1 > 6 ? 1 : speed + 1;
        store.dispatch(actions.speedStart(speed));
      }
    },
  });
};

const up = (store) => {
  store.dispatch(actions.keyboard.right(false));
  event.up({
    key: 'right',
  });
};

export default {
  down,
  up,
};
