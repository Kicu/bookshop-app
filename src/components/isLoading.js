import React from 'react';

const isLoading = WrappedComponent => originalProps => {
    const { isLoading, ...restProps } = originalProps;

    if (isLoading) {
        return 'loading data...'
    } else {
        return <WrappedComponent {...restProps} />
    }
};

export default isLoading;