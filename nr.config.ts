import { withDefaultPackageScripts } from '@darkobits/ts';

export default withDefaultPackageScripts(({ command, script }) => {
  script('postBuild', [
    command('vsct', { args: ['compile'] })
  ], {
    group: 'Lifecycle',
    description: '[hook] Compile the extension using VSCT.'
  });

  script('publish', [
    'script:build',
    command('npm', { args: ['publish', './extension'] })
  ], {
    group: 'Lifecycle',
    description: 'Publish a new version of the extension.'
  });

  script('start', [
    [
      'script:build.watch',
      command('vsct', { args: ['start'] })
    ]
  ], {
    group: 'Development',
    description: 'Continuously re-compile the extension.'
  });
});
