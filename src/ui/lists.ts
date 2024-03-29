import { ThemeGenerator } from '@darkobits/vsct/dist/lib/theme';

import { accentColor } from 'etc/color/common';
import gitHub from 'etc/color/github-dark';


// ----- Lists & Trees ---------------------------------------------------------

export default (theme: ThemeGenerator) => {
  /**
   * Note: The default foreground color for list items is defined by the
   * 'foreground' color (see: base.ts).
   */
  theme.colors.add({
    // Selected item when the list/tree is blurred.
    'list.inactiveSelectionForeground': gitHub.textSecondary,
    'list.inactiveSelectionBackground': gitHub.bgSecondary,

    // Selected item when the list/tree has focus.
    'list.activeSelectionForeground': gitHub.textPrimary,
    'list.activeSelectionBackground': gitHub.bgTertiary,

    // Focused/hovered item.
    'list.focusForeground': gitHub.scaleWhite,
    'list.focusBackground': gitHub.bgTertiary,

    // Hovered item.
    'list.hoverForeground': gitHub.scaleWhite,
    'list.hoverBackground': gitHub.bgTertiary,

    // List/Tree drag and drop background when moving items around using the
    // mouse.
    'list.dropBackground': gitHub.bgTertiary,

    // Contextual states.
    'list.errorForeground': gitHub.textDanger,
    'list.warningForeground': gitHub.textWarning,

    // Used to highlight matching fragments in search queries in the command
    // palette.
    'list.highlightForeground': accentColor

    // Color shown when using a context menu on a list item.
    // Surprisingly, this color is used for notification backgrounds when one
    // of the notifications buttons (OK/Cancel) is being clicked.
    // 'list.inactiveFocusBackground': DEBUG_PINK
  });
};
