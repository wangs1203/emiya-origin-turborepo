import './global-loader.less';

interface GlobalLoaderProps {
  type?: 'line' | 'circle';
}

export function GlobalLoader({
  type = 'line',
}: GlobalLoaderProps): React.ReactElement {
  if (type === 'line') {
    return <GlobalLoaderLine />;
  }
  return <GlobalLoaderCircle />;
}

function GlobalLoaderLine(): React.ReactElement {
  return (
    <div className="em-global-loading-line em-box-border em-flex em-flex-col em-items-center em-justify-center em-h-full">
      <div className="line-scale">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

function GlobalLoaderCircle(): React.ReactElement {
  return (
    <div className="em-global-loading-circle em-flex em-justify-center em-items-center em-absolute em-w-full em-h-screen em-top-0 em-bottom-0 em-left-0 em-right-0 em-m-auto em-text-center">
      <div className="tb-bounce1" />
      <div className="tb-bounce2" />
      <div className="tb-bounce3" />
    </div>
  );
}
