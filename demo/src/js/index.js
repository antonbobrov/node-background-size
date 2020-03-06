import '../styles/index.scss';
import { apply } from '../../../src';

window.onload = () => {

    const tests = document.querySelectorAll(".test-js");
    tests.forEach(test => {
    
        const media = test.querySelector("img, video");
    
        apply({
            media: media,
            rule: test.classList.contains("cover") ? 'cover' : 'contain',
            scale: 1
        });
    
    })

}
