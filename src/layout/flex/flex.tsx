import { Avg, Vert, Template } from './flex.utils';
import { polyfill } from 'react-lifecycles-compat';
import './style/flex.css';

/**
 * @exmaple
 * <Flex.></Flex>
 *
 * <Flex.avg><Flex.avg>
 *
 * <Flex.vert></Flex.vert>
 */

class Flex extends Template{
    static Avg: typeof Avg = Avg;
    static Vert: typeof Vert = Vert;
    protected type = 'default';
    constructor(props){
        super(props);
    }
}
polyfill(Flex);
export default Flex;

