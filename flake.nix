{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils/main";
  };
  outputs = { self, nixpkgs, flake-utils }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
        devShells."${system}".default = import ./.nix/shell.nix { inherit pkgs; };
        packages."${system}".default = import ./.nix/package.nix { inherit pkgs; };
    };
}
