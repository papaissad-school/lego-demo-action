# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

### `github-token`

**Required** The GITHUB_TOKEN to use.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: papaissad-school/lego-demo-action@main
with:
  who-to-greet: 'Mona the Octocat'
  github-token: ${{ secrets.GITHUB_TOKEN }}
```
