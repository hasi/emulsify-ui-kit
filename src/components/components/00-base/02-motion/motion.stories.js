import motion from './motion.twig';

import motionData from './motion.yml';

/**
 * Add storybook definition for Animations.
 */
export default { title: 'Components/Base/Motion' };

export const Usage = () => motion(motionData);
