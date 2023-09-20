import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';

import { accentColor } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Activity Bar ----------------------------------------------------------

export default (theme: ThemeGenerator) => {
  theme.colors.add({
    'activityBar.background': gitHub.bgCanvas,
    'activityBar.foreground': accentColor,
    'activityBar.border': gitHub.borderPrimary,
    'activityBar.dropBackground': gitHub.borderPrimary,

    'activityBarBadge.background': gitHub.counterBg,
    'activityBarBadge.foreground': gitHub.textSecondary
  });
};
