import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ButtonsOutOfAnchorsPart1Controller extends Controller {
  @action
  hi() {
    alert('hi');
  }
}
