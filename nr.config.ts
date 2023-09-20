import { withDefaultPackageScripts } from '@darkobits/ts';

export default withDefaultPackageScripts(({ command, script }) => {
  script('postBuild', [
    command('vsct', { args: ['compile'] })
  ], {
    group: 'Lifecycle'
  });

  script('publish', [
    'script:build',
    command('npm', { args: ['publish', './extension'] })
  ], {
    group: 'Lifecycle',
    timing: true
  });
});
