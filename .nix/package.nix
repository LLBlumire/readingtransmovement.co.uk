{ pkgs }:
pkgs.mkYarnPackage {
    src = ../.;
    yarnLock = ../yarn.lock;
    buildPhase = ''
        yarn --offline build
    '';
    distPhase = "true";
    configurePhase = ''
        ln -s $node_modules node_modules
    '';
    installPhase = ''
        mkdir -p $out
        cp -r dist/* $out/
    '';
}
