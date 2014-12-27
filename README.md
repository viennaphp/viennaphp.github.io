viennaphp/viennaphp.github.org
==============================

The ViennaPHP website. View at [http://viennaphp.org](http://viennaphp.org)

## Contribute

The website is powered by Jekyll, a static website generator. The content is
written in HTML as well as Markdown and the Foundation CSS framework is used. To help you get
started, a vagrant configuration is available to easily run jekyll in every
environment without the need to install something locally.

If you want to help, first make sure you can build the website locally:

1. Install vagrant and virtualbox
2. `vagrant up --provision`: Boots the vagrant machine and installs all 
    dependencies
3. `vagrant ssh`: Opens an SSH connection into the virtual machine.
4. `cd /vagrant && rake serve`: Running this inside the VM will start a
    webserver on port 4000 which serves the website and all assets.
5. http://localhost:4000 in your browser: You should see the ViennaPHP website

### Pull Requests

After you have changed some files and made sure the result looks ok, please
open a pull request against the ViennaPHP repository. Please make sure to
always make PRs against the `source` branch.

After your PR is merged, the new version of the website will be pushed soon
after.

### Big changes, little changes

If you wanna help, that's awesome. We appreciate any help towards making the
page better. If you have minor changes like spelling mistakes, grammer or
some CSS fix, go ahead and greate a PR right away.

If you want to change something bigger which might be the subject to discussion,
maybe opening an issue first is better simply because if we reject the idea
you save yourself the work of implementing it.
