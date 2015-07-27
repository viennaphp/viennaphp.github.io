require "jekyll"
require "tmpdir"

# Change your GitHub reponame
GITHUB_REPONAME = "viennaphp/viennaphp.github.io"

desc "Update repository"
task :update do
    system "git stash save"
    system "git pull"
    system "git push origin source"
    system "git stash pop"
end

desc "Generate blog files"
task :generate do
    Jekyll::Site.new(Jekyll.configuration({
        "source"      => ".",
        "destination" => "_site"
    })).process
end

desc "Run jekyll serve command"
task :serve do
    system "jekyll serve --watch --force_polling"
end

desc "Build and publish blog to gh-pages"
task :publish => [:generate] do
    Dir.mktmpdir do |tmp|
        cp_r "_site/.", tmp

        pwd = Dir.pwd
        Dir.chdir tmp

        system "git init"
        system "git add ."
        message = "Site updated at #{Time.now.utc}"
        system "git commit -m #{message.inspect}"
        system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
        system "git push origin master --force"

        Dir.chdir pwd
    end

    system "git push origin source"
end
