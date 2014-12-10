# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "Sgoettschkes/debian7"

  config.vm.network "forwarded_port", guest: 4000, host: 4000

  config.vm.provision "shell", inline: "gem install --no-rdoc --no-ri bundler jekyll rake"
  config.vm.provision "shell", inline: "apt-get update"
  config.vm.provision "shell", inline: "apt-get install -y curl build-essential"
  config.vm.provision "shell", inline: "curl -sL https://deb.nodesource.com/setup | bash -"
  config.vm.provision "shell", inline: "apt-get install -y nodejs"
end
