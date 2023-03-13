{ pkgs }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    just
  ];
  inputsFrom = [
    (import ./package.nix { inherit pkgs; })
  ];
}
