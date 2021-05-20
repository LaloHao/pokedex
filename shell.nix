let
  config = {
    android_sdk.accept_license = true;
  };
in {
  pkgs ? import <nixpkgs> { inherit config; },
  nixos ? import <nixos>  { inherit config; }
}:

with pkgs;
let
  java = jdk11;
  buildToolsVersion = "30.0.3";
  android = androidenv.composeAndroidPackages {
    platformVersions = [ "29" ];
    buildToolsVersions = [ buildToolsVersion ];
    abiVersions = [ "x86" "x86_64" ];
    useGoogleAPIs = true;
  };

in mkShell rec {
  JAVA_HOME = "${java.home}";
  ANDROID_SDK_ROOT = "${android.androidsdk}/libexec/android-sdk";
  ANDROID_NDK_ROOT = "${ANDROID_SDK_ROOT}/ndk-bundle";
  GRADLE_OPTS = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${ANDROID_SDK_ROOT}/build-tools/${buildToolsVersion}/aapt2";

  # nativeBuildInputs = [
  #   android.platform-tools
  # ];

  buildInputs = [
    coreutils
    java
    nodejs
    android.androidsdk
  ];
}
