{ pkgs }:
pkgs.mkShell {
  buildInputs = with pkgs; [
    just
    yarn
  ];
}
